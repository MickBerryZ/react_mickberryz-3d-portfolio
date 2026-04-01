import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/bowser2.webp"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/nav-icon4.svg"


export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/thawatchai-sangthep/"><img src={navIcon1} style={{
                                width: "30px", height: "30px"
                            }} /></a>
                            {/* <a href="https://www.facebook.com/mick.berryz/"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/mickberryz/"><img src={navIcon3} /></a> */}
                            <a href="https://github.com/MickBerryZ"><img src={navIcon4} alt="/" style={{
                                width: "30px", height: "30px"
                            }} /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}