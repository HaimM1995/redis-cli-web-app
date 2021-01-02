const invalidParameterInput = "Bad parameters number";
var inputElementId = 0;
var container;

document.addEventListener("DOMContentLoaded", function () {
    container = document.getElementById("container");
});

function printNewCommandLine() {

    let row = document.createElement("SPAN");

    // Line prefix
    let linePrefix = document.createTextNode("redis > ");
    row.appendChild(linePrefix);

    // User input
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.id = inputElementId;
    row.appendChild(input);

    let rowWrapper = document.createElement("DIV");
    rowWrapper.appendChild(row);
    container.appendChild(rowWrapper);

    // Set the focus on the current input
    document.getElementById(inputElementId).focus();

    // Disable the former input 
    lastInput = document.getElementById(inputElementId - 1);

    if (lastInput)
        lastInput.disabled = true;

    inputElementId++;
}

function printOutputLine(result) {
    let rowWrapper = document.createElement("DIV");
    rowWrapper.appendChild(document.createTextNode(nvl(result, "(nil)")));
    container.appendChild(rowWrapper);
}

function printOutputList(result) {
    if (result.length > 0) {
        let rowWrapper = document.createElement("DIV");
        for (let i = 0; i < result.length - 1; i++) {
            outputText = document.createTextNode(`${i + 1}) ${result[i]}`);
            rowWrapper.appendChild(outputText);
            rowWrapper.appendChild(document.createElement('BR'));
        }

        // For the last element don't put new line at the end.
        outputText = document.createTextNode(`${i + 1}) ${result[result.length - 1]}`);
        rowWrapper.appendChild(outputText);
        container.appendChild(rowWrapper);
    } else {
        printOutputLine(null);
    }
}

function nvl(param, value) {
    return (param == null || param == undefined) ? value : param;
}
