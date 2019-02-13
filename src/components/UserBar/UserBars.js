import React from "react";
import UserBar from "./UserBar";
import ReactGridLayout from "react-grid-layout";

class UserBars extends React.Component {


    renderUsers = () => {
        return this.props.users.map((user) => this.renderUser(user));
    };


    renderUser = (user) => {
        let teamColor = user.grid.x % 2 === 0 ? "blue" : "red";

        return (
            <div
                className={"user-bar-container " + teamColor}
                data-grid={user.grid}
                key={"#usrC" + user.id}>
                <UserBar
                    img={user.img}
                    name={user.username}
                    points={user.points}
                    key={"#usr" + user.id}
                    teamColorId={user.grid.x}

                />
            </div>
        )
    };

    render() {
        const grid = this.props.gridConfig;

        return (
            <ReactGridLayout className="react-grid-layout matchmaking"
                             cols={grid.cols}
                             rowHeight={grid.rowHeight}
                             width={grid.width}
                             margin={[10, 10, 10, 10]}
                             containerPadding={[10, 10]}
            >
                {this.renderUsers()}
            </ReactGridLayout>
        )
    }
}

export default UserBars;
