import React from "react";

class Settings extends React.Component {


    render() {
        let timeSettings = this.props.isTimerEnabled ?
            <div>
                <input type="number" name="sec" value={this.props.timerValue} step={30} min={0} max={300} onChange={this.props.setTime}/> sec.
            </div>
            : null;

        return (
            <div className="settings-container">
                <div>
                    <input type="checkbox" onChange={this.props.checkToggle}/> Enable timer
                </div>
                {timeSettings}
            </div>
        )
    }
}

export default Settings;
