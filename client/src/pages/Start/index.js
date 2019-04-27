import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


class Start extends Component {

    render() {

        return (
            <Container className="mt-5">
                <Row>
                    <Col></Col>
                    <Col>
                        <Image src="http://placehold.it/960x450" srcSet="http://placehold.it/960x450 960w" sizes="75vw" alt="Placeholder" ></Image>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                        <Link to="/adventure">
                            <Button id="start-btn" type="button" variant="success" size="lg" className="mt-3 ">Begin a new chapter</Button>
                        </Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Start;