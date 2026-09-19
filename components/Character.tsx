'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations, ContactShadows } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import type { Group } from 'three'

type AnimationName = 'Idle' | 'Walk' | 'Run'

function Soldier({ animation = 'Idle' }: { animation?: AnimationName }) {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF('/models/Soldier.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions[animation]
    action?.reset().fadeIn(0.5).play()
    return () => {
      action?.fadeOut(0.5)
    }
  }, [animation, actions])

  return <primitive ref={group} object={scene} />
}

export default function CharacterViewer({ animation }: { animation?: AnimationName }) {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={1.5} />
      <Soldier animation={animation} />
      <ContactShadows opacity={0.5} blur={2} />
      <OrbitControls target={[0, 1, 0]} />
    </Canvas>
  )
}

useGLTF.preload('/models/Soldier.glb')