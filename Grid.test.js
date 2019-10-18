let Position = require("./Position")
let GridContainer = require("./GridContainer")
let Grid = require("./Grid")

describe("Grid Class", () => {

    beforeEach( () => {

    })

    afterEach( () => {

    })

    it("Expect fillCellsByXY to handle when Position classes not passed as parameters", () => {
        try {
            let grid = new Grid()
            grid.fillCellsByXY("GREEN", {}, {})
        }
        catch(error) {
            expect(error).toEqual(Error("Position Class not passed as parameter"))
        }
    })

    it("Expect fillCellsByXY to handle when Position class not passed for toPos parameter", () => {
        try {
            let grid = new Grid()
            grid.fillCellsByXY("GREEN", new Position(1,1), {})
        }
        catch(error) {
            expect(error).toEqual(Error("Position Class not passed as parameter"))
        }
    })

    it("Expect fillCellsByXY to call gridContainer add one time when both fromPos and toPos specify 1,1", () => {
        let gridContainer = new GridContainer()
        jest.spyOn(gridContainer, "add").mockReturnValueOnce()
        let pos = new Position(1,1)       
        let grid = new Grid(gridContainer)
        grid.fillCellsByXY("GREEN", pos)
        expect(gridContainer.add).toBeCalledTimes(1)       
    })

    it("Expect fillCellsByXY to call gridContainer add two times when fromPos is 1,1 and toPos is 1,2", () => {
        let gridContainer = new GridContainer()
        jest.spyOn(gridContainer, "add").mockReturnValueOnce()
        let fromPos = new Position(1,1)  
        let toPos = new Position(1,2)       
        let grid = new Grid(gridContainer)
        grid.fillCellsByXY("GREEN", fromPos, toPos)
        expect(gridContainer.add).toBeCalledTimes(2)       
    })

    it("Expect fillCellsByXY to call gridContainer add four times when fromPos is 1,1 and toPos is 2,2", () => {
        let gridContainer = new GridContainer()
        jest.spyOn(gridContainer, "add").mockReturnValueOnce()
        let fromPos = new Position(1,1)  
        let toPos = new Position(2,2)       
        let grid = new Grid(gridContainer)
        grid.fillCellsByXY("GREEN", fromPos, toPos)
        expect(gridContainer.add).toBeCalledTimes(4)       
    })

    it("Expect fillCellsByXY to call gridContainer add six times when fromPos is 0,0 and toPos is 2,1", () => {
        let gridContainer = new GridContainer()
        jest.spyOn(gridContainer, "add").mockReturnValueOnce()
        let fromPos = new Position(0,0)  
        let toPos = new Position(2,1)       
        let grid = new Grid(gridContainer)
        grid.fillCellsByXY("GREEN", fromPos, toPos)
        expect(gridContainer.add).toBeCalledTimes(6)       
    })
})