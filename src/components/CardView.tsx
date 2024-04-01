import React, { useState } from 'react'
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

interface Props {
    opacity: number
    children: React.ReactNode
    className: string
}

const Section = ({ opacity, children, className }: Props) => {
    return (
        <div className={className} style={{ opacity: opacity }}>
            <div>
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
            <Section className="first-slide" opacity={opacityFirstSection}>
                house
            </Section>
            <Section className="second-slide" opacity={opacitySecondSection}>
                cat
            </Section>
            <Section className="third-slide" opacity={opacityLastSection}>
                car
            </Section>
        </Scroll>
    )
}
