import React from "react";

class GameInfo extends React.Component  {

    render() {
        return (
            <div className="info">
                <img
                    className="info-content-img"
                    src={require("../../assets/information_images/" + this.props.path)}
                    alt={this.props.title}
                    height={this.props.imgHeight + "px"}
                    width={this.props.imgWidth + "px"}
                />
                <h3 className="info-title">
                    {this.props.title}
                </h3>
                <p className="info-content-text">
                    {this.props.body}
                </p>

            </div>
        )
    }

}

export default GameInfo;
