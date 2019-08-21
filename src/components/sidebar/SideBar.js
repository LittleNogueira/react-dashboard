import React, {Component} from 'react';
import './SideBar.css';

import logo from '../../assets/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faSlidersH,faUserCircle,faBox,faSignal } from '@fortawesome/fontawesome-free-solid'


class SideBar extends Component{

    render(){

        const {show} = this.props;

        return (
            <div className={`side-navbar ${show ? 'show' : ''}`} >
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
                    </ul>
                </div>
            </div>
        );
    }

}

export default SideBar;