import './Footer.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function Footer() {
    const [gsapRef] = useGSAP(() => {
        gsap.from("footer", {
            y: -300,
            immediateRender: false,
            scrollTrigger: {
                trigger: "footer",
                markers: false,
                scrub: true,
                invalidateOnRefresh: true,
                end: "100% 100%"
            }
        });
    });

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-content-text-icons">
                    <div className="footer-content-text">
                        <h2>
                            DOMINIQUE <br /> FERREIRA
                        </h2>

                        <p>domferreira.art@gmail.com</p>
                    </div>

                    <ul>
                        <li><a href="/illustration"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="/character-design"><ion-icon name="logo-tiktok"></ion-icon></a></li>
                        <li><a href="/about"><ion-icon name="logo-discord"></ion-icon></a></li>
                    </ul>
                </div>

                <div className="powered">
                    <p>All the illustrations of this <br></br> website are my creation.</p>
                    <a href="https://github.com/julianojnc" target="_blank">Made by JulianoJnc</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;