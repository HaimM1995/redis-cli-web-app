var inputElementId = 0;
function printNewCommandLine() {

    var row = document.createElement("SPAN");

    // Const text
    var constText = document.createTextNode("redis > ");
    row.appendChild(constText);

    var input = document.createElement("INPUT");
    input.setAttribute("type", "text");

    //Set its unique ID.
    input.id = inputElementId;

    row.appendChild(input);

    var container = document.createElement("DIV");
    container.appendChild(row);

    var general = document.getElementById("general");

    //Finally, append the element to the HTML body
    general.appendChild(container);

    document.getElementById(inputElementId).focus();
    lastInput = document.getElementById(inputElementId - 1);

    if (lastInput)
        lastInput.disabled = true;

    inputElementId++;
}

function printOutputLine(result) {
    var container = document.createElement("DIV");
    var outputText = document.createTextNode(result);
    container.appendChild(outputText);
    var general = document.getElementById("general");
    general.appendChild(container);
}
