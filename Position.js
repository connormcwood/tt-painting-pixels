
class Position {

    constructor(x, y) {
        this._x = x
        this._y = y
    }

    getX() {
        return this._x
    }

    getY() {
        return this._y
    }

    getXY() {
        return {
            x: this._x,
            y: this._y
        }
    }
}

module.exports = Position