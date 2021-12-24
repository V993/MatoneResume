import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {

    render() {

        return (
            <Container className="main">
                <Row className="cell">
                    <Col sm={4} className="cell">
                        <h1>Leonardo Matone</h1>
                        {/* <img src="leoHeadshot.jpg" 
                             alt="matoneHeadshot.jpg" 
                             className="variableImg"></img> */}
                    </Col>
                    <Col sm={8} className="cell">
                        <h1>Projects:</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}