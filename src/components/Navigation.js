import React from "react";
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div className="nav-container">
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-header">
                        <ul>
                            <li>
                                <Link to={"/"}><i href="/" className="fa fa-city"> Intelligence Center</i></Link>
                            </li>
                            <div id="start-mission">
                                <li>
                                    <Link to={"/"}><i className="fa fa-users"> Start mission</i></Link>
                                </li>
                            </div>

                            <li>
                                <Link to={"/"}><i className="fa fa-shopping-basket"> Store</i></Link>
                            </li>

                            <li>
                                <Link to={"/profile"}><i className="fa fa-user-circle"> Profile</i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
