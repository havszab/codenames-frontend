import React from "react";
import GameInfo from "./GameInfo";

const GameInfos = (props) => (
    props.infos.map((info) => {
        return (
            <GameInfo title={info.title} body={info.bodyText} path={info.imgPath} />
            )
    })
);

export default GameInfos;
