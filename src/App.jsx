import { useRef } from 'react';

// Imports Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

// Imports Components
import Footer from './component/footer/Footer';
import Banner from './component/banner/Banner';

// Imports Images
import firstCardImg from '../public/assets/firstCard.webp'
import secondCardImg from '../public/assets/secondCard.webp'
import thirdCardImg from '../public/assets/thirdCard.webp'

// Scrool Smoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
    const containerRef = useRef(null);

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} id="smooth-wrapper">
            <div id="smooth-content">

                <main>

                    {/* <img className="background-img" src="../src/assets/background-home.webp" alt="Banner" data-speed=".6"/> */}
                    <Banner />

                    <section className="second-section">
                        <h2>::: :::  PROJETOS  ::: :::</h2>

                        <div className="second-section-content">
                            <div className="second-section-content-cards">
                                <div className="card">
                                    <img src={secondCardImg} alt="Imagem da Arte" />
                                    <p>Nome da Arte - 2024</p>
                                </div>

                                <div className="card">
                                    <img src={thirdCardImg} alt="Imagem da Arte" />
                                    <p>Nome da Arte - 2025</p>
                                </div>

                                <div className="card">
                                    <img src={firstCardImg} alt="Imagem da Arte" />
                                    <p>Nome da Arte - 2026</p>
                                </div>

                                 <div className="card">
                                    <img src={firstCardImg} alt="Imagem da Arte" />
                                    <p>Nome da Arte - 2026</p>
                                </div>
                            </div>

                            <div className="see-more">
                                <u>ver mais</u>
                            </div>
                        </div>

                    </section>

                    <section className="third-section">

                        <div className="third-section-content">
                            <div className="third-section-content-text">
                                <h2>::: :::  CONTATO  ::: :::</h2>

                                <p>
                                    Olá! Quer uma comissão ou fazer um projeto comigo?
                                    <br></br><br></br>
                                    Entre em contato comigo via e-mail:
                                    <br></br>
                                    <a href="mailto:domferreira.art@gmail.com">domferreira.art@gmail.com</a>
                                    <br></br><br></br>
                                    Me dá um alô lá! Ficarei feliz em receber seu contato! :)
                                </p>
                            </div>
                        </div>

                        <div className="see-more">
                            <u>ver mais</u>
                        </div>

                    </section>

                    <section className="fourth-section">

                        <div className="fourth-section-content">
                            <div className="fourth-section-content-text">
                                <h2>::: :::  PORTIFÓLIO  ::: :::</h2>
                                <p>Veja meu portifólio clicando no botão abaixo!</p>
                                <button>Portfólio</button>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />

            </div>
        </div>
    )
}

export default App
