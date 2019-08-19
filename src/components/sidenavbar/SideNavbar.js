import React, {Component} from 'react';
import './SideNavbar.css';

import logo from '../../assets/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faSlidersH,faUserCircle,faBox,faSignal } from '@fortawesome/fontawesome-free-solid'


class SideNavbar extends Component{

    render(){
        return (
            <div className="side-navbar" >
                <div className="logo-navbar" >
                    <img src={logo} alt="Logo" />
                </div>
                <div className="content-navbar" >
                    <h1>Using Onesigal</h1>
                    <ul className="overflow-navbar" >
                        <li><FontAwesomeIcon className="icon-navbar" icon={faCheckSquare} /> Dashboard</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faSlidersH} /> Settings</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faUserCircle} /> Users</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faBox} /> Delivery</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faSignal} /> Onesigal API</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faCheckSquare} /> Dashboard</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faSlidersH} /> Settings</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faUserCircle} /> Users</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faBox} /> Delivery</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faSignal} /> Onesigal API</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faBox} /> Delivery</li>
                        <li><FontAwesomeIcon className="icon-navbar" icon={faSignal} /> Onesigal API</li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default SideNavbar;