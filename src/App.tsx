import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'

function App() {

  return (
    <>
      <Canvas>
        <Experience></Experience>
      </Canvas>
    </>
  )
}

export default App
