import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'


const ThreejsDemo = () => {
  return (
    <div id='canvas-wrapper-2'>
      <Canvas
        dpr={[1, 2]} // pixel ratio - this is the default val
        camera={{
          // fov: 45,
          // near: 0.1,
          // far: 200,
          position: [1, 0.3, 1.5]
        }}
      >
        <Experience />
      </Canvas>
    </div>
  )
}

export default ThreejsDemo