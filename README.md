## README

## Run Example
- Run example by running `npm run run` inside terminal.

## Dev Dependency
- NodeJS is a dependency (Developed using v10.16.3)
- Developed using Ubuntu Terminal
- Jest is used to unit test the project

## Known Limitations
- Due to the use of padStart a hard coded value of 2 is used which means that should the gridContainer max length be more than two digits the console logging will be off.
- Unicode square is used to display Cell colours
- The Placement Type could be moved out to be its own class with its own method that handles what happens when it is placed. ( Composition between FILL/FLOOD)
- Position checking for Flooding could be tidied up, rather than being a function it could have been apart of a class that helped iterate through the grid. 
- White Items are not initalised as a CELL and therefore a flood does not work on them. A fix would be to iterate through the Grid and create a CELL of white however I decided against this so that WHITE is almost a null value.

## Additional Notes
- Personal Preference is not to use ES6 getters and setters because personally I find the obj.method syntax as a setter unsettling. 

