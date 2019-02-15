import React from "react";
import GameInfo from "./GameInfo";
import ReactGridLayout from "react-grid-layout";

class GameInfos extends React.Component {

    renderGameInfos() {
        return this.props.infos.map((info) => this.renderGameInfo(info));
    }

    renderGameInfo(info) {
        let grid = {
            x: info.posX,
            y: info.posY,
            w: info.width,
            h: info.height,
            static: false

        };
        return (
            <div className="info-box" data-grid={grid} key={"#infC" + info.id}>
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
        const grid = this.props.gridConfig;

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
