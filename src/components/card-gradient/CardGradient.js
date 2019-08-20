import './CardGradient.css';

import React from 'react';
import { Card } from 'react-bootstrap';

class CardGradient extends React.Component{
    
    render(){

        const {title, subtitle, color} = this.props;

        return(
            <Card className={`card-custom gradient-${color ? color : 'default'}`} >
                <Card.Body>
                    {this.props.children}
                    {this.props.children ? <hr/> : <span></span>}
                    <p className="title" >{title}</p>
                    <p className="subtitle" >{subtitle}</p>
                </Card.Body>
            </Card>
        );
    }

}

export default CardGradient;