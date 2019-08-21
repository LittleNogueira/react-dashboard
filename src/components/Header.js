import React, { Component } from 'react';
import './Header.css';

import SideBar from './sidebar/SideBar';
import TopNavbar from '../components/topnavbar/TopNavbar';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            showSidebar: false
        }
    }

    showAndHiddenSidebar(){
        this.setState({showSidebar: !this.state.showSidebar});
    }

    render() {

        const {showSidebar} = this.state;

        return (
            <div>
                <div className="container-header" >
                    <SideBar show={showSidebar} />
                    <div className="container-content" >
                       <TopNavbar actionBar={this.showAndHiddenSidebar.bind(this)} />
                       <div className="main-content" >
                           {this.props.children}
                       </div>
                    </div>
                </div>
                <div onClick={this.showAndHiddenSidebar.bind(this)} className={`hidden ${showSidebar ? 'show' : ''}`} ></div>
            </div>
        );
    }
}

export default Header;