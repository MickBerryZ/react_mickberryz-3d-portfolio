import { useState, useEffect, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const TO_ROTATE = ["Software Developer", "IT Support"];

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % TO_ROTATE.length;
        let fullText = TO_ROTATE[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text.length]);


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [delta, tick])



    return (
        <section className="flex flex-col gap-4 banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                                    <span className="tagline">Welcome to My Portfolio</span>
                                    <h2>{"Hi I'm Mickey "}</h2>
                                    <h3 className="wrap">{text}</h3>
                                    <p className="text-start">Software Developer and IT professional experienced in building scalable web applications using React, Next.js, Laravel, WordPress and ASP.NET Core. Skilled in leading development projects, integrating APIs, automating workflows, and delivering high-quality user-focused solutions. Experienced in collaborating with cross-functional teams and managing stakeholders to drive project success and improve system efficiency.</p>
                                    <a href="https://github.com/MickBerryZ" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                        <button>
                                            Let's connect <ArrowRightCircle size={25} />
                                        </button>
                                    </a>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

// export default Banner