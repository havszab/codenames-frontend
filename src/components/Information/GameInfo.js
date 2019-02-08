import React from "react";

class GameInfo extends React.Component  {

    render() {
        return (
            <div className="info">
                <div className="info-title">
                    {this.props.title}
                </div>
                <div className="info-content-text">
                    {this.props.body}
                </div>
                <img
                    className="info-content-img"
                    src={require("../../assets/information_images/" + this.props.path)}
                    alt={this.props.title}
                    height={this.props.imgHeight + "px"}
                    width={this.props.imgWidth + "px"}
                />
            </div>
        )
    }

}

export default GameInfo;
