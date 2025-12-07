import { Center, OrbitControls } from "@react-three/drei";
import { Pirate } from "./Pirate";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Stage = () => {
  return (
    <>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10, 1, 1]} />
        <meshBasicMaterial transparent opacity={0.1} color={"black"} />
      </mesh>

      <mesh rotation={[0, 0, 0]} position={[0, 0, -4]}>
        <planeGeometry args={[10, 10, 1, 1]} />
        <meshBasicMaterial color={"#00b4ff"} />
      </mesh>

      <mesh receiveShadow position={[1.5, 1.5, -1]}>
        <circleGeometry args={[1, 64]} />
        <meshBasicMaterial color={"yellow"} transparent opacity={0.82} />
      </mesh>
    </>
  );
};

export default function Experience() {
  const gl = useThree((state) => state.gl);

  const screenshot = () => {
    console.log("kuttar bacca")
    const link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      gl.domElement
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );

    link.click();
  };

useEffect(() => {
    // 💡 Add the function to the global scope on mount
    window.takeScreenshort = screenshot;

  }, []);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 1, 2]} intensity={1.2} />
      <spotLight position={[-1, 1, 1]} intensity={5} color={"#8758c4"} />
      <pointLight position={[-1, 0.5, -1]} intensity={4} color={"#47b6de"} />
      <Center>
        <Pirate />
      </Center>
      <Stage />
    </>
  );
}
