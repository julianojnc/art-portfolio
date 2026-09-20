import './Banner.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Banner() {
    const [gsapRef] = useGSAP(() => {
        // Size first section
        gsap.from(".background-home", {
            scale: 1.5,
            duration: 3,
            ease: "circ.out",
        });
    });

    return (
        <section className="first-section home" data-speed=".6">

            <div className="background-home"></div>

            <header className="header-home">
                <nav>
                    <ul>
                        <li><a href="/illustration"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="/character-design"><ion-icon name="logo-tiktok"></ion-icon></a></li>
                        <li><a href="/about"><ion-icon name="logo-discord"></ion-icon></a></li>
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