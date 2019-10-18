let GridContainer = require("./GridContainer")
let Position = require("./Position")
let Cell = require("./Cell")

const MAX_GRID_POS = {
    x: 10,
    y: 10
}

const DISALLOWED_FLOOD_POS_COMBINATIONS = [
    {
        x: -1,
        y: -1
    },{
        x: -1,
        y: 1
    },{
        x: 1,
        y: 1
    },{
        x: 1,
        y: -1
    }]

function disallowedFloodPropsMatch(x, y) {
    for(let i = 0; i < DISALLOWED_FLOOD_POS_COMBINATIONS.length; i++) {
        let item = DISALLOWED_FLOOD_POS_COMBINATIONS[i]
        if(item.x === x && item.y === y) {

            return true
        }
    }
    return false
}

function positionAlreadyChecked(posArr, newPos) {
    for(let i = 0; i < posArr.length; i++) {
        if(posArr[i].getX() === newPos.getX() && posArr[i].getY() === newPos.getY()) {
            return true
        }
    }
    return false
}

class Grid {
    
    constructor(grid = new GridContainer()) {
        this._grid = grid
    }

    fillCellsByPos(colour, fromPos, toPos = null, placementType = Grid.placementType().FILL) {
        if( !(fromPos instanceof Position) || (!(toPos instanceof Position) && toPos !== null) ) {
            throw Error("Position Class not passed as parameter")
        }

        if(toPos === null) {
            toPos = fromPos
        }

        for(let x = fromPos.getX(); x <= toPos.getX(); x++) {
            for(let y = fromPos.getY(); y <= toPos.getY(); y++) {
                let pos = new Position(x,y)
                let cellAtPos = this.getContainer().get(pos)
                let oldColour = null
                if(cellAtPos === null) {
                    let newCell = new Cell(pos)
                    newCell.setColour(colour)
                    this.getContainer().add(newCell)
                } else {
                    oldColour = cellAtPos.getColour()
                    this.getContainer().get(pos).setColour(colour)
                }

                if(placementType === Grid.placementType().FLOOD) {
                    let floodCell = this.getContainer().get(pos)
                    let checkedPositions = []
                    this.fillCellAreaColourByPos(pos, oldColour, colour, checkedPositions)
                }
            }
        }
    }

    fillCellAreaColourByPos(pos, oldColour, newColour, checkedPositions) {
        for(let a = -1; a <= 1; a++) {
            for(let b = -1; b <= 1; b++) {
                let tempPos = new Position(pos.getX() + a, pos.getY() + b)
                if(disallowedFloodPropsMatch(a, b) || positionAlreadyChecked(checkedPositions, tempPos)) {
                    continue
                }
                checkedPositions.push(tempPos)
                let tempCell = this.getContainer().get(tempPos)
                if(tempCell instanceof Cell) {
                    if(oldColour === tempCell.getColour() ) {
                        tempCell.setColour(newColour)
                        this.fillCellAreaColourByPos(tempPos, oldColour, newColour, checkedPositions)
                    }
                }
            }
        }
    }


    displayCells() {
        this._grid.displayCells()
    }

    getContainer() {
        return this._grid
    }

    static placementType() {
        return {
            FILL: "FILL",
            FLOOD: "FLOOD"
        }
    }
}

module.exports = Grid