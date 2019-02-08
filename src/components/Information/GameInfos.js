import React from "react";
import GameInfo from "./GameInfo";
import ReactGridLayout from "react-grid-layout";

class GameInfos extends React.Component {

    renderGameInfos() {
        return this.props.infos.map((info, index) => this.renderGameInfo(info, index));
    }

    renderGameInfo(info, index) {
        let grid = {
            x: 0+index,
            y: 0+index,
            w: 5,
            h: 5,
            static: true
        };
        return (
            <div data-grid={grid} key={"#inf" + info.id}>
                <GameInfo
                    title={info.title}
                    body={info.bodyText}
                    path={info.imgPath}
                    imgHeight={info.height / 10}
                    imgWidth={info.width / 10}
                    key={"#inf" + info.id}
                />
            </div>
        )
    }

    render() {
        const grid = {
            cols: 16,
            rowHeight: 75,
            width: 1000
        };

        return (
            <ReactGridLayout className="layout" cols={grid.cols}
                             rowHeight={grid.rowHeight}
                             width={grid.width}
                             margin={[0, 0]}
                             containerPadding={[10, 10]}>
                {this.renderGameInfos()}
            </ReactGridLayout>
        )
    }
}

export default GameInfos;
