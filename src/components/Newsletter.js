import { Alert, Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf("@") > -1) {
            onValidated({
                EMAIL: email
            })
        }
    }

    const clearFields = () => {
        setEmail("");
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <div className="d-flex flex-column align-items-center text-center">
                    <h3>Subscribe to our Newsletter</h3>
                    {status === "sending" && <Alert>Sending...</Alert>}
                    {status === "error" && <Alert variant="danger">{message}</Alert>}
                    {status === "success" && <Alert variant="success">{message}</Alert>}

                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                            />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Col>
    )
}