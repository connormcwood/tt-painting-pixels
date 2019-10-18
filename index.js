let Grid = require("./Grid")
let Position = require("./Position")
let Colour = require("./Colour")

module.exports.handler = () => {
    let blueColour = new Colour("BLUE")
    let yellowColour = new Colour("YELLOW")
    let greenColour = new Colour("GREEN")
    let redColour = new Colour("RED")

    let grid = new Grid()
    // Example 1
    grid.fillCellsByXY(yellowColour, new Position(8,2))
    grid.fillCellsByXY(blueColour, new Position(8,4))
    grid.fillCellsByXY(blueColour, new Position(9,5))
    grid.displayCells()
    console.log("EXAMPLE 1 -- END")

    // EXAMPLE 2
    grid.fillCellsByXY(blueColour, new Position(2,3), new Position(7,3))
    grid.fillCellsByXY(blueColour, new Position(5,4), new Position(6,4))
    grid.displayCells()
    console.log("EXAMPLE 2 -- END")

    // EXAMPLE 3
    grid.fillCellsByXY(greenColour, new Position(3, 2), new Position(3, 6))
    grid.displayCells()
    console.log("EXAMPLE 3 -- END")

    // EXAMPLE 4 
    grid.fillCellsByXY(redColour, new Position(6, 3), new Position(6, 3), true)
    grid.displayCells()
    console.log("EXAMPLE 4 -- END")
}

this.handler()