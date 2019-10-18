let Position = require("./Position")
let Cell = require("./Cell")
let Colour = require("./Colour")

const MAX_GRID_POS = {
    x: 10,
    y: 10
}

const PADDING_SPACING_HALF = "".padStart(2, " ")
const PADDING_SPACING = "".padStart(1, " ")
const UNICODE_SQUARE = "◼"
const DEFAULT_WHITE_COLOUR = Colour.getAvailableColours()["WHITE"]

class GridContainer {

    constructor(maxPos = new Position(MAX_GRID_POS.x, MAX_GRID_POS.y)) {
        this._gridArray = [
            [],[]
        ]
        this._maxPos = maxPos

        this.setupArray()
    }

    getMaxPosition() {
        return this._maxPos
    }

    setupArray() {
        for(let x = 0; x <= this.getMaxPosition().getX(); x++) {
            this._gridArray[x] = []
            for(let y = 0; y <= this.getMaxPosition().getY(); y++) {
                this._gridArray[x][y] = null
            }
        } 
    }

    displayXAxis() {
        let xConsoleLog = "##" + PADDING_SPACING
        for(let x = 1; x < this.getMaxPosition().getX(); x++) {
            xConsoleLog += `${x}`.padStart(2, '0') + PADDING_SPACING
        }
        console.log(xConsoleLog)
    }

    displayCells() {
        this.displayXAxis()
        for(let y = 1; y < this.getMaxPosition().getY(); y++) {
            let consoleLogArr = []
            consoleLogArr.push(DEFAULT_WHITE_COLOUR)
            consoleLogArr.push(`${y}`.padStart(2, '0') + PADDING_SPACING)
            for(let x = 1; x < this.getMaxPosition().getX(); x++) {
                if(this._gridArray[x][y] instanceof Cell) {
                    consoleLogArr.push(this._gridArray[x][y].getCellColour())
                    consoleLogArr.push(UNICODE_SQUARE + PADDING_SPACING_HALF)
                } else {
                    consoleLogArr.push(DEFAULT_WHITE_COLOUR)
                    consoleLogArr.push(UNICODE_SQUARE + PADDING_SPACING_HALF)
                }
            }
            console.log(consoleLogArr.join(""))            
        }
    }

    add(cell) {
        let pos = cell.getPosition()    
        this._gridArray[pos.getX()][pos.getY()] = cell
    }

    get(pos) {
        if(pos.getX() < 0 || pos.getY() < 0) {
            return
        }
        return this._gridArray[pos.getX()][pos.getY()]
    }

    yield() {
        return this._gridArray
    }
}

module.exports = GridContainer