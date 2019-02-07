import React from "react";

class GameInfo extends React.Component  {

    render() {
        const imgPath = "../../assets/information_images/" + this.props.path;

        return (
            <div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.body}
                </div>
                <img src={require("../../assets/information_images/" + this.props.path)} alt=""/>
            </div>
        )
    }

}

export default GameInfo;
