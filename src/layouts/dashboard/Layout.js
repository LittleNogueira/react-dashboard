import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import './Layout.css';
import { ReactReduxContext } from 'react-redux';
import { connect } from 'react-redux';
import { showAndHidden } from '../../utils/actions/sidebar';

function Layout(props) {
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => {
                return (<div>
                    <div className="container-header" >
                        <SideBar store={store} />
                        <div className="container-content" >
                            <TopNavbar actionBar={props.showAndHiddenSidebar} />
                            <div className="main-content" >
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <div onClick={props.showAndHiddenSidebar} className={`hidden ${props.sidebar ? 'show' : ''}`} ></div>
                </div>);
            }}
        </ReactReduxContext.Consumer>
    );
}

const mapStateToProps = (state) => {
    return { sidebar: state.sidebar }
};

const mapDispatchToProps = dispatch => {
    return {
        showAndHiddenSidebar: () => {
            dispatch(showAndHidden());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);