import React, { Component } from 'react';

import Header from '../../../components/Header';
import CardGradient from '../../../components/card-gradient/CardGradient';
import { Row, Col } from 'react-bootstrap';

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
                            <CardGradient 
                                title="March 27th 2019" 
                                subtitle="12:26:05 am UTC - 07:00"
                                color="blue">
                                <FontAwesomeIcon icon={faBox} /> Hello Word!
                            </CardGradient>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <CardGradient 
                                title="March 27th 2019" 
                                subtitle="12:26:05 am UTC - 07:00"
                                color="orange">
                                <FontAwesomeIcon icon={faBox} /> Hello Word!
                            </CardGradient>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <CardGradient 
                                title="March 27th 2019" 
                                subtitle="12:26:05 am UTC - 07:00"
                                color="la-sei">
                                <FontAwesomeIcon icon={faBox} /> Hello Word!
                            </CardGradient>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="3" >
                            <CardGradient 
                                title="March 27th 2019" 
                                subtitle="12:26:05 am UTC - 07:00"
                                color="red">
                                <FontAwesomeIcon icon={faBox} /> Hello Word!
                            </CardGradient>
                        </Col>
                    </Row>
                </Header>
            </div>
        );
    }
}

export default Main;