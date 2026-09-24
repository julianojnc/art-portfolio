import './Banner.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Banner() {
    const [gsapRef] = useGSAP(() => {
        gsap.from(".background-home", {
            scale: 1.2,
            duration: 3,
            ease: "circ.out",

            onComplete: () => {
                gsap.to(".header-home", {
                    opacity: 1,
                    duration: 3,
                    ease: "power2.out",
                });
            }
        });

        gsap.fromTo(".first-section-content", {
            opacity: 1,
        },
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: ".first-section-content",
                    start: "70% 50%",
                    end: "80% 30%",
                    scrub: true,
                }
            }
        );
    });

    return (
        <section className="first-section home" data-speed=".6">

            <div className="background-home"></div>

            <header className="header-home">
                <nav>
                    <ul>
                        <li><a href="https://www.instagram.com/8thedom/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="https://www.tiktok.com/@8thedom" target="_blank"><ion-icon name="logo-tiktok"></ion-icon></a></li>
                        <li><a href="https://discord.com/users/934459886941663302" target="_blank"><ion-icon name="logo-discord"></ion-icon></a></li>
                    </ul>
                </nav>
            </header>

            <div className="first-section-content">
                <h1>DOMINIQUE FERREIRA</h1>
                <p>Ilustration | Character Design</p>
            </div>

        </section>
    );
}

export default Banner;