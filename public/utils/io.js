const invalidParameterInput = "Bad parameters number";
var currentInputElement;
var currentInputIndex = -1;
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
    currentInputElement = document.createElement("INPUT");
    currentInputElement.setAttribute("type", "text");
    currentInputElement.id = historyCommandIndex = ++currentInputIndex;
    row.appendChild(currentInputElement);

    let rowWrapper = document.createElement("DIV");
    rowWrapper.appendChild(row);
    container.appendChild(rowWrapper);

    // Set the focus on the current input
    currentInputElement.focus();

    // Disable the former input 
    // For the first input there is no previous input to disable
    if (currentInputIndex > 0) {
        lastInput = document.getElementById(currentInputIndex - 1);
        lastInput.disabled = true;
    }
}

function printOutputLine(result) {
    result = Number.isInteger(result) ? `(integer) ${result}` : result;
    let rowWrapper = document.createElement("DIV");
    rowWrapper.appendChild(document.createTextNode(nvl(result, "(nil)")));
    container.appendChild(rowWrapper);
}

function printOutputList(result) {
    if (result.length > 0) {
        let rowWrapper = document.createElement("DIV");
        for (var i = 0; i < result.length; i++) {
            outputText = document.createTextNode(`${i + 1}) ${result[i]}`);
            rowWrapper.appendChild(outputText);

            // For the last element don't put new line at the end.
            if (i !== result.length - 1)
                rowWrapper.appendChild(document.createElement('BR'));
        }

        container.appendChild(rowWrapper);
    } else {
        printOutputLine(null);
    }
}

function nvl(param, value) {
    return (param == null || param == undefined) ? value : param;
}
