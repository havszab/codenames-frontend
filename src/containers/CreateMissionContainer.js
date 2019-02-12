import React from "react";
import axios from "axios";
import UserBars from "../components/UserBar/UserBars";
import gridConfig from "./CreateMissionGridLayoutConfig";
import Settings from "../components/CreateMission/Settings";
import Chat from "../components/CreateMission/Chat";
import SpinningButton from "../components/UI/SpinningButton";

const API = "http://localhost:8080/api/users";

class CreateMissionContainer extends React.Component {

    state = {
        users: [],
        timer: {
            isEnabled: false,
            time: 0
        }
    };



    addGridLayoutToUsers = (data) => {
        let newUsers = [];

        data.map((user, index) => {
            let gridData = {
                x: this.getHorizontalPosition(index),
                y: this.getVerticalPosition(index),
                w: 1,
                h: 1,
                static: false
            };

            user.grid = gridData;
            newUsers.push(user)
        });

        this.setState({users: newUsers});
    };


    getHorizontalPosition = (index) => {
        return index % 2 === 0 ? 0 : 1;
    };

    getVerticalPosition = (index) => {
        return parseInt(index / 2);
    };

    toggleTimerHandler = () => {
        let prevState = this.state;
        prevState.timer.isEnabled = !prevState.timer.isEnabled;
        this.setState({...prevState});
    }

    componentDidMount() {
        axios.get(API)
            .then(response => {
                //this.setState({users: response.data.users});
                this.addGridLayoutToUsers(response.data.users);
            })
            .catch(error => {
                console.log(error + " Couldn't load server response.")
            })
    }

    render() {
        const content = this.state.users.length !== 0 ?
            <div className="matchmaking-container">
                <h2>Organizing Mission</h2>
                <Settings
                    isTimerEnabled={this.state.timer.isEnabled}
                    timerTime={this.state.timer.time}
                    checkToggle={this.toggleTimerHandler}/>
                <div className="team-title">
                    <div>Blue Team</div>
                    <div>Red Team</div>
                </div>
                <UserBars users={this.state.users} gridConfig={gridConfig.grid}/>
                <Chat title="Mission room chat" subTitle=""/>
                <div className="btn-wrapper">
                    <SpinningButton/>
                </div>
            </div>
            : <div>No data</div>;
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default CreateMissionContainer;
