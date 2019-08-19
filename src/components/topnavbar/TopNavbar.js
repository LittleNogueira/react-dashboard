import React, { Component } from 'react';

import './TopNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Image from 'react-bootstrap/Image'

import { faBars } from '@fortawesome/fontawesome-free-solid'

// import profile from '../../assets/img/profile.png';

class TopNavbar extends Component {
    render() {
        return (
            <div className="container-topnavbar" >
                <div className="bars" >
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="title" >
                    Cloud four - Productions
                </div>
                <div className="actions" >
                    <div className="profile" >

                    </div>
                </div>
            </div>
        );
    }
}

export default TopNavbar;