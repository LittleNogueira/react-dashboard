import React, { Component } from 'react';
import './Main.css';

import Header from '../../../components/Header';
import { Card, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/fontawesome-free-solid'

class Main extends Component {
    render() {
        return (
            <div>
                <Header>
                    <h1>Hello World!</h1>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <Card className="card-custom gradient-blue" >
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBox} /> Hello Word!
                                    <hr />
                                    <p className="title" >March 27th 2019</p>
                                    <p className="subtitle" >12:26:05 am UTC - 07:00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <Card className="card-custom gradient-orange" >
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBox} /> Hello Word!
                                    <hr />
                                    <p className="title" >March 27th 2019</p>
                                    <p className="subtitle" >12:26:05 am UTC - 07:00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <Card className="card-custom gradient-la-sei" >
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBox} /> Hello Word!
                                    <hr />
                                    <p className="title" >March 27th 2019</p>
                                    <p className="subtitle" >12:26:05 am UTC - 07:00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <Card className="card-custom gradient-green" >
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBox} /> Hello Word!
                                    <hr />
                                    <p className="title" >March 27th 2019</p>
                                    <p className="subtitle" >12:26:05 am UTC - 07:00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Header>
            </div>
        );
    }
}

export default Main;