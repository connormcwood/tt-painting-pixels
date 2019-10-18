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
    grid.fillCellsByPos(yellowColour, new Position(8,2))
    grid.fillCellsByPos(blueColour, new Position(8,4))
    grid.fillCellsByPos(blueColour, new Position(9,5))
    grid.displayCells()
    console.log("EXAMPLE 1 -- END")

    // EXAMPLE 2
    grid.fillCellsByPos(blueColour, new Position(2,3), new Position(7,3))
    grid.fillCellsByPos(blueColour, new Position(5,4), new Position(6,4))
    grid.displayCells()
    console.log("EXAMPLE 2 -- END")

    // EXAMPLE 3
    grid.fillCellsByPos(greenColour, new Position(3, 2), new Position(3, 6))
    grid.displayCells()
    console.log("EXAMPLE 3 -- END")

    // EXAMPLE 4 
    grid.fillCellsByPos(redColour, new Position(6, 3), new Position(6, 3), Grid.placementType().FLOOD)
    grid.displayCells()
    console.log("EXAMPLE 4 -- END")

    grid.fillCellsByPos(redColour, new Position(6, 3), new Position(6, 3), Grid.placementType().FLOOD)
    grid.displayCells()
    console.log("EXAMPLE 5 - NEW (Ensured Callstack wasnt being hit) -- END")
}

this.handler()