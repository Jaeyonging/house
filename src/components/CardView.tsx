import React, { useState } from 'react'
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

interface Props {
    opacity: number
    children: React.ReactNode
}

const Section = ({ opacity, children }: Props) => {
    return (
        <div className="slide" style={{ opacity: opacity }}>
            <div className='card-section'>
                {children}
            </div>
        </div>

    );
};


export const CardView = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
        setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
        setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });
    return (
        <Scroll html>
            <Section opacity={opacityFirstSection}>
                house
            </Section>
            <Section opacity={opacitySecondSection}>
                cat
            </Section>
            <Section opacity={opacityLastSection}>
                car
            </Section>
        </Scroll>
    )
}
