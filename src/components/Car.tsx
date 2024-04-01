import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export const Car = () => {
    const gltf = useLoader(GLTFLoader, "./models/scene.gltf",);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const scroll = useScroll();

    useFrame(() => {
        if (tl.current) {
            tl.current.seek(scroll.offset * tl.current.duration());
            // console.log(scroll.offset * tl.current.duration())

        }
    });

    useEffect(() => {
        if (gltf) {
            gltf.scene.position.set(3, -8, -25)
            gltf.scene.rotation.set(0, -Math.PI / 2, 0)
        }
    }, [gltf])

    useEffect(() => {
        if (!tl.current) {
            tl.current = gsap.timeline();
            tl.current.to(
                gltf.scene.position,
                {
                    duration: 1,
                    z: 3,
                    x: 8,
                },
                0
            )


            tl.current.to(
                gltf.scene.position,
                {
                    duration: 1,
                    z: 0,
                    x: -10,

                }, 2
            )


            tl.current.to(
                gltf.scene.rotation,
                {
                    duration: 1,
                    y: 0
                }, 2
            )
        }

    }, []);

    return (
        <>
            <primitive object={gltf.scene}></primitive>
        </>
    );
}

useGLTF.preload("./models/scene.gltf");
