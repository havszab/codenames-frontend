import React from "react";
import axios from "axios";
import UserBars from "../components/UserBar/UserBars";
import gridConfig from "../Config/CreateMissionGridLayoutConfig";
import Settings from "../components/CreateMission/Settings";
import Chat from "../components/CreateMission/Chat";
import SpinningButton from "../components/UI/SpinningButton";
import api from "../Config/APIconfig";

const API = api + "/api/users";

class CreateMissionContainer extends React.Component {

    state = {
        users: [],
        timer: {
            isEnabled: false,
            time: null,
        }
    };


    addGridLayoutToUsers = (data) => {
        let newUsers = [];

        data.map((user, index) => {
            user.grid = {
                x: this.getHorizontalPosition(index),
                y: this.getVerticalPosition(index),
                w: 1,
                h: 1,
                onDragStop: this.clickHandLer,
                static: false
            };
            return newUsers.push(user)
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
        prevState.timer.time = null;
        this.setState({...prevState});
    };

    setTimeHandler = (event) => {
        let prevState = this.state;
        let target = event.target;
        prevState.timer.time = target.value;
        this.setState({...prevState});
        console.log(this.state.timer)
    };

    clickHandLer = () => {
        console.log("clicked")
    };

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.addGridLayoutToUsers(response.data.users);
            })
            .catch(error => {
                console.log(" Couldn't load server response. \n Reason : " + error);
            })
    }

    render() {
        const content = this.state.users.length !== 0 ?
            <div className="matchmaking-container">
                <h2>Organizing Mission</h2>
                <Settings
                    isTimerEnabled={this.state.timer.isEnabled}
                    timerValue={this.state.timer.time}
                    checkToggle={this.toggleTimerHandler}
                    setTime={this.setTimeHandler}
                />
                <div className="team-title">
                    <div>Blue Team</div>
                    <div>Red Team</div>
                </div>
                <UserBars users={this.state.users} gridConfig={gridConfig.grid} clicked={this.clickHandLer}/>
                <Chat title="Mission room chat" subTitle=""/>
                <div className="btn-wrapper">
                    <SpinningButton linkTo="/"/>
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
