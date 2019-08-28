import React, {useState} from 'react';
import SideBar from '../../components/sidebar/SideBar';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import './Layout.css';

export default function Layout(props){

    const [showSidebar, setShowSidebar] = useState(false);

    const showAndHiddenSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    return (
        <div>
            <div className="container-header" >
                <SideBar show={showSidebar} />
                <div className="container-content" >
                    <TopNavbar actionBar={showAndHiddenSidebar.bind(this)} />
                    <div className="main-content" >
                        {props.children}
                    </div>
                </div>
            </div>
            <div onClick={showAndHiddenSidebar.bind(this)} className={`hidden ${showSidebar ? 'show' : ''}`} ></div>
        </div>
    );

}