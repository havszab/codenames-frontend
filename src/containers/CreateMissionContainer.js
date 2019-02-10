import React from "react";
import axios from "axios";
import UserBars from "../components/UserBar/UserBars";
import gridConfig from "./CreateMissionGridLayoutConfig";

const API = "http://localhost:8080/api/users";

class CreateMissionContainer extends React.Component {

    state = {
        users: [],
    };

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({users: response.data.info})
                console.log(this.state)
            })
            .catch(error => {
                console.log("Couldn't load server response.")
            })

    }

    render() {
        return (
            <div>
                <h2>Organizing Mission</h2>
                <div className="team-title">
                    <div>Blue Team</div>
                    <div>Red Team</div>
                </div>
                <UserBars users={this.state.users} gridConfig={gridConfig.grid}/>
            </div>
        )
    }
}

export default CreateMissionContainer;
