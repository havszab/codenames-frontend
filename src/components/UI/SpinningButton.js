import React from "react";

class SpinningButton extends React.Component {

    render() {
        return (
            <div className="btn-container">
                <div className="btn-submit">
                    <a href="#" className="round blue">Ready?<span className="round">START MISSION</span></a>
                </div>
            </div>
        )
    }
}

export default SpinningButton;
