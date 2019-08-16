import React,{Component} from 'react';

import './TopNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

class TopNavbar extends Component{
    render(){
        return(
            <div className="container-topnavbar" >
                <div className="bars" >
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className="options-topnavbar" >

                </ul>
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