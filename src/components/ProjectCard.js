import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, hoverImgUrl, projectUrl }) => {
    return (
        <Col xs={12} sm={6} md={4}>
            <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
            >

                <div className="proj-imgbx">
                    <img
                        src={imgUrl}
                        alt={title}
                        className="img-default"
                    />

                    {/* Hover Image */}
                    <img
                        src={hoverImgUrl}
                        alt={`${title} preview`}
                        className="img-hover"
                    />

                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}