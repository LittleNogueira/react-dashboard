import React, { Component } from 'react';

import Header from '../../../components/Header';
import CardGradient from '../../../components/card-gradient/CardGradient';
import { Card, Row, Col, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/fontawesome-free-solid'
import ReactEcharts from 'echarts-for-react';


class Main extends Component {

    // constructor(props){
    //     super(props);
    // }

    getOptionBarChart = () => {
        return {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };

    };

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
                                color="green">
                                <FontAwesomeIcon icon={faBox} /> Hello Word!
                            </CardGradient>
                        </Col>
                    </Row>
                    <h1>Upload your data</h1>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="12" xl="6" >
                            <Card>
                                <Card.Body>
                                    <Card.Title>Bar Chart</Card.Title>
                                    <ReactEcharts
                                        option={this.getOptionBarChart()}
                                        style={{ height: '361px', width: '100%' }}
                                        className='react_for_echarts' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="12" xl="6" >
                            <Card>
                                <Card.Body  >
                                    <Card.Title>Table</Card.Title>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Eliza</td>
                                                <td>Carvalho</td>
                                                <td>@effyz</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Lucas</td>
                                                <td>Brelax</td>
                                                <td>@brelaz</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Raidy</td>
                                                <td>Jacare</td>
                                                <td>@raidy</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Mateus</td>
                                                <td>Nogueira</td>
                                                <td>@LittleNogueira</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Marcus</td>
                                                <td>Gabriel</td>
                                                <td>@puppey</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Thor</td>
                                                <td>Ragnarok</td>
                                                <td>@thor</td>
                                            </tr>
                                        </tbody>
                                    </Table>
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