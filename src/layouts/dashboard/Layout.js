import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import './Layout.css';
import { ReactReduxContext } from 'react-redux';
import {connect} from 'react-redux';
import {showAndHidden} from '../../utils/actions/sidebar';

class Layout extends React.Component{

    render(){
        return(
            <ReactReduxContext.Consumer>
            {({ store }) => {
                return (<div>
                    <div className="container-header" >
                        <SideBar store={store} />
                        <div className="container-content" >
                            <TopNavbar actionBar={this.props.showAndHiddenSidebar} />
                            <div className="main-content" >
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div onClick={this.props.showAndHiddenSidebar} className={`hidden ${this.props.sidebar ? 'show' : ''}`} ></div>
                </div>);    
            }}
            </ReactReduxContext.Consumer>
        );
    }

}

const mapStateToProps = (state) => {
    return {sidebar:state.sidebar}
};

const mapDispatchToProps = dispatch => {
    return {
        showAndHiddenSidebar: () => {
            dispatch(showAndHidden());
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Layout);