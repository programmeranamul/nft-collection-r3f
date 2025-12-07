import { Center, OrbitControls } from "@react-three/drei";
import { Pirate } from "./Pirate";

export default function Experience() {
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
    </>
  );
}
