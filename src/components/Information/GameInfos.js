import React from "react";
import GameInfo from "./GameInfo";
import ReactGridLayout from "react-grid-layout";

class GameInfos extends React.Component {

    renderGameInfos() {
        return this.props.infos.map((info, index) => this.renderGameInfo(info, index));
    }

    renderGameInfo(info, index) {
        let grid = {
            x: info.posX,
            y: info.posY,
            w: info.width,
            h: info.height,
            static: true
        };
        return (
            <div className="info-box" data-grid={grid} key={"#inf" + info.id}>
                <GameInfo
                    title={info.title}
                    body={info.bodyText}
                    path={info.imgPath}
                    imgHeight={info.imgHeight}
                    imgWidth={info.imgWidth}
                    key={"#inf" + info.id}
                />
            </div>
        )
    }

    render() {
        const grid = {
            cols: 10,
            rowHeight: 60,
            width: 1280
        };

        return (
            <ReactGridLayout className="layout" cols={grid.cols}
                             rowHeight={grid.rowHeight}
                             width={grid.width}
                             margin={[10, 10]}
                             containerPadding={[10, 10]}>
                {this.renderGameInfos()}
            </ReactGridLayout>
        )
    }
}

export default GameInfos;
