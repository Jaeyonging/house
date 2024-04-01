import { ScrollControls } from "@react-three/drei"
import { Car } from "./Car"
import { CardView } from "./CardView"


export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1}></ambientLight>
            <ScrollControls pages={3} damping={0.25}>
                <Car></Car>
                <CardView></CardView>
            </ScrollControls>
        </>
    )
}