import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }

}

export default Layout;
