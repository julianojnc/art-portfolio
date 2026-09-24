import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Titles(props) {
    const titleRef = useRef(null);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            opacity: 0,

            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 70%",
                end: "top 50%",
                scrub: true,
            }
        });
    }, {
        scope: titleRef
    });

    return (
            <h2 ref={titleRef} className="titles">
                ::: ::: {props.children} ::: :::
            </h2>
    );
}

export default Titles;