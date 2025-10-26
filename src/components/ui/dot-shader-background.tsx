import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const { size, viewport } = useThree()
  const mousePos = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (!meshRef.current) return

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(size.width * viewport.dpr, size.height * viewport.dpr) },
        dotColor: { value: new THREE.Color('#00E5FF') },
        bgColor: { value: new THREE.Color('#000000') },
        mousePos: { value: new THREE.Vector2(0.5, 0.5) },
        gridSize: { value: 100 },
        dotOpacity: { value: 0.04 }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec3 dotColor;
        uniform vec3 bgColor;
        uniform vec2 mousePos;
        uniform float gridSize;
        uniform float dotOpacity;

        vec2 coverUv(vec2 uv) {
          vec2 s = resolution.xy / max(resolution.x, resolution.y);
          vec2 newUv = (uv - 0.5) * s + 0.5;
          return clamp(newUv, 0.0, 1.0);
        }

        float sdfCircle(vec2 p, float r) {
          return length(p - 0.5) - r;
        }

        void main() {
          vec2 screenUv = gl_FragCoord.xy / resolution;
          vec2 uv = coverUv(screenUv);

          vec2 gridUv = fract(uv * gridSize);

          float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y);
          vec2 centerDisplace = vec2(0.7, 1.1);
          float circleMaskCenter = length(uv - centerDisplace);
          float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);

          float combinedMask = screenMask * circleMaskFromCenter;
          float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

          float mouseDistance = length(uv - mousePos);
          float mouseInfluence = smoothstep(0.3, 0.0, mouseDistance);

          float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);

          float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);

          float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

          float smoothDot = smoothstep(0.05, 0.0, sdfDot);

          float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);

          vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));

          gl_FragColor = vec4(composition, 1.0);
        }
      `
    })

    materialRef.current = material
    meshRef.current.material = material

    return () => {
      material.dispose()
    }
  }, [size.width, size.height, viewport.dpr])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
      materialRef.current.uniforms.resolution.value.set(
        size.width * viewport.dpr,
        size.height * viewport.dpr
      )
    }
  })

  const handlePointerMove = (e: any) => {
    if (e.uv && materialRef.current) {
      mousePos.current.x = e.uv.x
      mousePos.current.y = e.uv.y
      materialRef.current.uniforms.mousePos.value.set(e.uv.x, e.uv.y)
    }
  }

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh ref={meshRef} scale={[scale, scale, 1]} onPointerMove={handlePointerMove}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  )
}

export const DotScreenShader = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
        powerPreference: 'high-performance'
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <Scene />
    </Canvas>
  )
}
