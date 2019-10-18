
class Cell {

    constructor(pos) {
        this._pos = pos
        this._colour = null
    }

    getPosition() {
        return this._pos
    }

    getCellColour() {
        return this._colour.getColour()
    }

    setColour(colour) {
        this._colour = colour
    }
}

module.exports = Cell