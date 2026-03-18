import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

import bowser001 from "../assets/img/bowser001.webp"
import bowser002 from "../assets/img/bowser002.webp"
import bowser003 from "../assets/img/bowser003.png"
import bowser004 from "../assets/img/bowser004.png"
import bowser005 from "../assets/img/bowser005.webp"
import bowser006 from "../assets/img/bowser006.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {

    const projects = [
        {
            title: "MickBerryZ Shop",
            description: "Design & Development",
            imgUrl: bowser001,
            projectUrl: "https://mickberryz-ecom-temu-next15-sanity-stripe-2025-03-08.vercel.app/",
        },
        {
            title: "Business Startup2",
            description: "Design & Development",
            imgUrl: bowser002,
        },
        {
            title: "Business Startup3",
            description: "Design & Development",
            imgUrl: bowser003,
        },
        {
            title: "Business Startup4",
            description: "Design & Development",
            imgUrl: bowser004,
        },
        {
            title: "Business Startup5",
            description: "Design & Development",
            imgUrl: bowser005,
        },
        {
            title: "Business Startup6",
            description: "Design & Development",
            imgUrl: bowser006,
        },
    ];
    return (
        <section className="project" id="projects">

            <Container>
                <Row>
                    <Col xs={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__bounce" : ""} >
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Mickey</Tab.Pane>
                                <Tab.Pane eventKey="third">Mickey</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="/"></img>
        </section>

    )
}