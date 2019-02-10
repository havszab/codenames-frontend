import React, {Component} from "react";
import "./App.css";
import Layout from "./containers/Layout";
import InformationContainer from "./containers/InformationContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateMissionContainer from "./containers/CreateMissionContainer";


class App extends Component {


    render() {
        return <div className="App">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" render={() => <InformationContainer/>}/>
                        <Route exact path="/create-mission" render={() => <CreateMissionContainer/>}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </div>;
    }
}


export default App;
