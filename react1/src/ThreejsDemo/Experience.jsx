
// Html from drei can be on its own or inside a mesh

import { useRef } from "react"
import {  OrbitControls, TransformControls, Html, Float, MeshReflectorMaterial } from "@react-three/drei"

const Experience = () => {

  const cube = useRef()
  const sphere = useRef()

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={ [0.6, 0.2, 0] } intensity={0.9} color='#fff' />
      <ambientLight intensity={0.3} color='0x404040' />
      
      <mesh ref={cube} scale={ [1, 1, 1] } position={ [0, 0, 0] }>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' wireframe={false} />
      </mesh>
    </>
  )
}

export default Experience