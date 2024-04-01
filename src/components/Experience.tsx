import { ScrollControls } from "@react-three/drei"
import { Car } from "./Car"

export const Experience = () => {
    return (
        <>
            <mesh>
                <ambientLight intensity={1}></ambientLight>
                <ScrollControls pages={3} damping={0.25}>
                    <Car></Car>
                </ScrollControls>
            </mesh>
        </>
    )
}