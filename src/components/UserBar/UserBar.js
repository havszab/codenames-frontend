import React from "react";

const imgSize = 80;

class UserBar extends React.Component {

    render() {

        return (
            <div>
                <img className={"user-image"}
                     src={require("../../assets/profile_pics/img_" + this.props.img)}
                     alt=""
                     height={imgSize}
                     width={imgSize}
                />
                <div className="user-name">{this.props.name}</div>
                <div className="fa fa-star user-points">{this.props.points}</div>
            </div>
        )
    }
}

export default UserBar;
