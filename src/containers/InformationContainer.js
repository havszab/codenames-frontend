import React from "react";
import axios from "axios";
import GameInfos from "../components/Information/GameInfos";
import gridConfig from "../Config/InformationGridLayoutConfig";

const API = "http://localhost:8080/api/info";


class InformationContainer extends React.Component {

    state = {
        infos: [],

    };

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({infos: response.data.info})
            })
            .catch(error => {
                console.log("Couldn't load server response. \n Reason : " + error)
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
