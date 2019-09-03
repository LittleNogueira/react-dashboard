import React from 'react';
import './SideBar.css';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSlidersH, faUserCircle, faBox, faSignal } from '@fortawesome/fontawesome-free-solid'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function SideBar(props){
    return (
        <div className={`side-navbar ${props.sidebar ? 'show' : ''}`} >
            <div className="logo-navbar" >
                <img src={logo} alt="Logo" />
            </div>
            <div className="content-navbar" >
                <h1>Using Onesigal</h1>
                <ul className="overflow-navbar" >
                    <Link to="/dashboard" ><li><FontAwesomeIcon className="icon-navbar" icon={faCheckSquare} /> Dashboard</li></Link>
                    <Link to="/form" ><li><FontAwesomeIcon className="icon-navbar" icon={faSlidersH} /> Forms</li></Link>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faUserCircle} /> Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faBox} /> Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faSignal} />  Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faUserCircle} /> Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faBox} /> Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faSignal} />  Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faUserCircle} /> Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faBox} /> Item sidebar </li>
                    <li><FontAwesomeIcon className="icon-navbar" icon={faSignal} />  Item sidebar </li>

                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { sidebar: state.sidebar }
}
const SidebarContainer = connect(mapStateToProps, null)(SideBar);

export default SidebarContainer;