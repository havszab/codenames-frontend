import React from "react";

const GameInfo = (props) => (
    <div>
        <div>
                {props.title}
        </div>
        <div>
            {props.body}
        </div>
        <img src={props.path} alt=""/>
    </div>
);

export default GameInfo;
