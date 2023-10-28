import BarChartDemo from './BarChartDemo.jsx'
import GsapScrollyDemo from './GsapScrollyDemo.jsx'
import ThreejsDemo from './ThreejsDemo/ThreejsDemo.jsx'
import './App.scss'

function App() {

  return (
    <>
      <h2>D3 chart</h2>
      <BarChartDemo />
      <h2>GSAP scrolly</h2>
      <GsapScrollyDemo />
      <h2>Three.js 3D scene</h2>
      <ThreejsDemo />
    </>
  )
}

export default App
