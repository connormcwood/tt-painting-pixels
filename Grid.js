let GridContainer = require("./GridContainer")
let Position = require("./Position")
let Cell = require("./Cell")

const MAX_GRID_POS = {
    x: 10,
    y: 10
}

class Grid {
    
    constructor(grid = new GridContainer()) {
        this._grid = grid
    }

    fillCellsByXY(colour, fromPos, toPos = null) {
        if( !(fromPos instanceof Position) || (!(toPos instanceof Position) && toPos !== null) ) {
            throw Error("Position Class not passed as parameter")
        }

        if(toPos === null) {
            toPos = fromPos
        }

        for(let x = fromPos.getX(); x <= toPos.getX(); x++) {
            for(let y = fromPos.getY(); y <= toPos.getY(); y++) {
                let pos = new Position(x,y)
                let newCell = new Cell(pos)
                newCell.setColour(colour)
                this.getContainer().add(newCell)
            }
        }

    }

    displayCells() {
        this._grid.displayCells()
    }

    getContainer() {
        return this._grid
    }
}

module.exports = Grid