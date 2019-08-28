import React from 'react';
import './CardGradient.css';
import { Card } from 'react-bootstrap';

export default function CardGradient(props){ 

    return(
        <Card className={`card-custom gradient-${props.color ? props.color : 'default'}`} >
            <Card.Body>
                {props.children}
                {props.children ? <hr/> : <span></span>}
                <p className="title" >{props.title}</p>
                <p className="subtitle" >{props.subtitle}</p>
            </Card.Body>
        </Card>
    );

}