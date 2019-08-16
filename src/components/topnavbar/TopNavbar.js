import React,{Component} from 'react';

import './TopNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

import logo from '../../assets/logo.svg';

class TopNavbar extends Component{
    render(){
        return(
            <div className="container-topnavbar" >
                <div className="bars" >
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="actions" >
                    <div className="details" >
                        Cloud Four - Productions 
                    </div>
                    <div className="profile" >
                        <img src={logo} alt="profile" />
                    </div>
                </div>
                {/* <div className="content-topnavbar" >
                    <p>Cloud four - Productions</p>
                </div>
                <div className="content-topnavbar" >
                    <p>Photo</p>
                </div> */}
            </div>
        );
    }
}

export default TopNavbar;