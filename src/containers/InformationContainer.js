import React from "react";
import axios from "axios";
import GameInfos from "../components/Information/GameInfos";
import gridConfig from "./InformationGridLayoutConfig";

const API = "http://localhost:8080/api/info";


class InformationContainer extends React.Component {

    state = {
        infos: [],

    };

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({infos: response.data.info})
                console.log(this.state)
            })
            .catch(error => {
                console.log("Couldn't load server response.")
            })

    }

    render() {
        let infoContent;
        this.state.infos.length !== 0 ?
            infoContent = <GameInfos infos={this.state.infos} gridConfig={gridConfig.grid}/> :
            infoContent = <div className="no-response">Sorry, no response from the server, please try again.</div>;

        return (
            <div>
            {infoContent}
            </div>
        )
    }
}

export default InformationContainer;
