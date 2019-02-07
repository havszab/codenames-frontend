import React from "react";
import axios from "axios";
import GameInfos from "../components/Information/GameInfos";

const API = "http://192.168.1.69:8080/api/info";


class InformationContainer extends React.Component {

    state = {
        infos: [],

    };

    componentDidMount() {
        axios.get(API)
            .then(response =>
            {
                this.setState({infos: response.data.info})
                console.log(this.state)
            })

    }

    render() {
        return (
            <GameInfos infos={this.state.infos} />
        )
    }
}

export default InformationContainer;
