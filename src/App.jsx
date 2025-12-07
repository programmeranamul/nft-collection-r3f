import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <color attach="background" args={["#222222"]} />
        <Experience />
      </Canvas>
      <button className="generate" onClick={() => window.takeScreenshort()}>
        Generate collection
      </button>
    </>
  );
}

export default App;
