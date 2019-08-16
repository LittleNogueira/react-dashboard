import React, { Component } from 'react';
import './Header.css';

import SideNavbar from '../components/sidenavbar/SideNavbar';
import TopNavbar from '../components/topnavbar/TopNavbar';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-header" >
                    <SideNavbar />
                    <div className="container-content" >
                       <TopNavbar/>
                       <div className="main-content" >
                           {this.props.children}
                       </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Header;