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

import myTemuImg from "../assets/img/temu.png";
import eCommerceBlackfriday from "../assets/img/e-commerce-blackfriday.png";
import estate from "../assets/img/estate.png";

export const Projects = () => {

    const projects = [
        {
            title: "MickBerryZ Shop(Temu Clone)",
            description: "Built a full-stack storefront with a Zustand-Prisma synced cart, Stripe webhooks, gamified UI, and Umami analytics.",
            imgUrl: myTemuImg,
            hoverImgUrl: bowser001,
            projectUrl: "https://mickberryz-ecom-temu-next15-sanity-stripe-2025-03-08.vercel.app/",
        },
        {
            title: "E-Commerce Platform",
            description: "Built with Next.js 15, integrated with Sanity CMS for content management, Stripe for payment processing, and Clerk for authentication.",
            imgUrl: eCommerceBlackfriday,
            hoverImgUrl: bowser002,
            projectUrl: "https://mickberryz-ecom-next15-sanity-stripe-clerk-2024-12-08.vercel.app/",

        },
        {
            title: "Real Estate Platform",
            description: "Developed using MERN Stack (MongoDB, Express.js, React, Node.js) with user authentication, interactive maps, and property listings.",
            imgUrl: estate,
            hoverImgUrl: bowser003,
            projectUrl: "https://mickberryz-mern-estate-v2024-06-22.vercel.app/",
        },
        // {
        //     title: "Business Startup4",
        //     description: "Design & Development",
        //     imgUrl: bowser004,
        // },
        // {
        //     title: "Business Startup5",
        //     description: "Design & Development",
        //     imgUrl: bowser005,
        // },
        // {
        //     title: "Business Startup6",
        //     description: "Design & Development",
        //     imgUrl: bowser006,
        // },
    ];
    return (
        <section className="project" id="projects">

            <Container>
                <Row>
                    <Col xs={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""} >
                                    <h2>Projects</h2>
                                    <p>My journey through full-stack development, showcasing robust e-commerce solutions, dynamic marketplaces, and interactive user interfaces. Each project reflects a commitment to clean code, scalability, and delivering a seamless user experience using modern frameworks.</p>
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
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item> */}
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
                                {/* <Tab.Pane eventKey="second">Mickey</Tab.Pane>
                                <Tab.Pane eventKey="third">Mickey</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="/"></img>
        </section>

    )
}