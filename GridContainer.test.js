let GridContainer = require("./GridContainer")
let Position = require("./Position")
let Colour = require("./Colour")
let Cell = require("./Cell")

describe("GridContainer", () => {


    it("Expect add to add a Cell to the gridArray", () => {
        let gridContainer = new GridContainer()
        let newCell = new Cell(new Position(1, 1))
        gridContainer.add(newCell)
        expect(gridContainer.yield()[1][1]).toEqual(newCell)
    })

    it("Expect add to update a colour if the cell already exists at that position", () => {
        let gridContainer = new GridContainer()
        let cyanColour = new Colour("CYAN")
        let blackColour = new Colour("BLACK")
        let oldCell = new Cell(new Position(1, 1))
        oldCell.setColour(cyanColour)
        gridContainer.add(oldCell)
        let newCell = new Cell(new Position(1, 1))
        newCell.setColour(blackColour)
        gridContainer.add(newCell)
        expect(gridContainer.yield()[1][1].getColour()).toEqual(blackColour)
    })
})