
class Colour {

    constructor(type) {
        try {
            this._type = type
            this._colour = Colour.getAvailableColours()[type]
        }
        catch (error) {
            throw Error("INVALID COLOUR")
        }
    }

    getColour() {
        return this._colour
    }

    getType() {
        return this._type
    }

    static getAvailableColours() {
        return {
            BLACK: "\x1b[30m",
            RED: "\x1b[31m",
            GREEN: "\x1b[32m",
            YELLOW: "\x1b[33m",
            BLUE: "\x1b[34m",
            MAGENTA: "\x1b[35m",
            CYAN: "\x1b[36m",
            WHITE: "\x1b[37m"
        }
    }
}

module.exports = Colour