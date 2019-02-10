import React from "react";
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div className="nav-container">
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-header">

                        <div className="navbar nav-left">
                            <Link to={"/"}><i href="/" className="fa fa-city"> Intelligence Center</i></Link>
                        </div>

                        <div className="navbar nav-left">
                            <Link to={"/"}><i href="/" className="fa fa-sign-in-alt"> Join mission</i></Link>
                        </div>

                        <div className="navbar nav-center">
                            <Link to={"/create-mission"}><i className="fa fa-users"> Start mission</i></Link>
                        </div>


                        <div className="navbar nav-right">
                            <Link to={"/"}><i className="fa fa-coins"> Store</i></Link>

                            <Link to={"/profile"}><i className="fa fa-user-circle"> Profile</i></Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
