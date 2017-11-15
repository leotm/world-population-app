# World Population Node.js command-line app

Returns a sorted list of given countries.
Ordered from highest to lowest population size.
Queries the World Population API.

## Build

Run `npm install` to build the project.

## Test

Run `npm test` or `mocha test`.
All 3 tests should pass with flying colours.

## Run

Run e.g. `node app.js "Greece, Brazil, France, Germany"` from your command line.

## Example command-line output

```
Brazil: 211785533
Germany: 80612060
France: 65026385
Greece: 10885390
```

## Debug

Launch the program in the Visual Studio Code built-in debugger.
The `.vscode/launch.json` configuration file will pass the example command-line argument `"Greece, Brazil, France, Germany"`.
The Debug Console tab will display the output.
