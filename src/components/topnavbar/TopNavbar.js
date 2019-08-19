import React, { Component } from 'react';

import './TopNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'

import { faBars } from '@fortawesome/fontawesome-free-solid'

import profile from '../../assets/img/profile.png';

class TopNavbar extends Component {
    render() {
        return (
            <div className="container-topnavbar" >
                <div className="bars" >
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="actions float-right" >
                    <div className="profile" >
                        <Image src={profile} roundedCircle />
                    </div>
                    <div className="details" >
                        Cloud four - Productions
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNavbar;