import React, { Component } from 'react';
import './Main.css';

import Header from '../../../components/Header';
import CardGradient from '../../../components/card-gradient/CardGradient';
import { Card, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/fontawesome-free-solid'
import ReactEcharts from 'echarts-for-react';


class Main extends Component {

    // constructor(props){
    //     super(props);
    // }

    getOptionBarChart = () => {
        return {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };     
    };

    getOptionPieChart = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
        
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直达', selected:true},
                        {value:679, name:'营销广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1048, name:'百度'},
                        {value:251, name:'谷歌'},
                        {value:147, name:'必应'},
                        {value:102, name:'其他'}
                    ]
                }
            ]
        };
    }

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
                            <Card className="card-chart" >
                                <Card.Body>
                                <Card.Title>Bar Chart</Card.Title>
                                <ReactEcharts 
                                    option={this.getOptionBarChart()} 
                                    style={{height: '350px', width: '100%'}}  
                                    className='react_for_echarts' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="12" xl="6" >
                            <Card className="card-chart" >
                                <Card.Body  >
                                <Card.Title>Pie Chart</Card.Title>
                                <ReactEcharts 
                                    option={this.getOptionPieChart()} 
                                    style={{height: '350px', width: '100%'}}  
                                    className='react_for_echarts' />
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