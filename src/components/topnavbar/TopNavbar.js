import React from 'react';
import './TopNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import profile from '../../assets/img/profile.png';
import Image from 'react-bootstrap/Image'

export default function TopNavbar(props){
    return (
        <div className="container-topnavbar" >
            <div className="bars" >
                <FontAwesomeIcon onClick={props.actionBar} icon={faBars} />
            </div>
            <div className="title" >
                Cloud four - Productions
            </div>
            <div className="actions" >
                <div className="profile" >
                    <Image roundedCircle src={profile} />
                </div>
                <div className="sing-out" >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
            </div>
        </div>
    );
}