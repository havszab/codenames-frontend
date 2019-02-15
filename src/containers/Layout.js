import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AuthContainer from "./AuthContainer";


class Layout extends React.Component {
    state = {
      user: {
          isAuthenticated: false,
          name: "",
          details: {}
      }
    };

    updateUser =()=> {
      console.log("userupdate")
    };


    render() {
        //let headerContent = this.state.user.isAuthenticated ? <Navigation/> : <AuthContainer />;
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
