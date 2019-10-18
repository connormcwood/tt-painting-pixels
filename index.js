let Grid = require("./Grid")
let Position = require("./Position")
let Colour = require("./Colour")

module.exports.handler = () => {
    let blueColour = new Colour("BLUE")
    let yellowColour = new Colour("YELLOW")

    let grid = new Grid()
    // Example 1
    grid.fillCellsByXY(yellowColour, new Position(8,2), new Position(8,2))
    grid.fillCellsByXY(blueColour, new Position(8,4), new Position(8,4))
    grid.fillCellsByXY(blueColour, new Position(9,5), new Position(9,5))

    grid.displayCells()
}

this.handler()