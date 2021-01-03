var historyCommandIndex;
var historyCommand = [];

document.addEventListener("DOMContentLoaded", function () {
    printNewCommandLine();

    historyCommandIndex = currentInputIndex;

    // Process the input when the user presses Enter 
    document.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "Enter":
                processInput();
                break;
            case "ArrowUp":
                handleArrows('up');
                break;
            case "ArrowDown":
                handleArrows('down');
                break;
            default:
                break;
        }
    });
});

function handleArrows(arrow) {
    let indicator = (arrow === "up") ? -1 : 1;
    let tmpWantedCommandIndex = historyCommandIndex + indicator;

    // If reached the current input, show empty line
    if (tmpWantedCommandIndex === currentInputIndex) {
        historyCommandIndex = tmpWantedCommandIndex;
        currentInputElement.value = "";
    }
    // Make sure the wanted command is between boundries
    else if (tmpWantedCommandIndex >= 0 &&
        (tmpWantedCommandIndex < currentInputIndex)) {
        historyCommandIndex = tmpWantedCommandIndex;
        currentInputElement.value = historyCommand[historyCommandIndex];
    }

}

function processInput() {

    // Save command for history usage
    historyCommand.push(currentInputElement.value);

    let input = currentInputElement.value.trim().split(" ").filter(str => str.length > 0);
    let command = input[0].toUpperCase();
    let params = input.slice(1);

    switch (command) {
        case "GET":
            executeGet(params);
            break;
        case "SET":
            executeSet(params);
            break;
        case "DEL":
            executeDel(params);
            break;
        case "KEYS":
            executeKeys(params);
            break;
        case "EXISTS":
            executeExists(params);
            break;
        case "EXPIRE":
            executeExpire(params);
            break;
        default:
            printOutputLine("Command doesn't exist. The Supported commands are: GET, SET, DEL, EXISTS, KEYS, EXPIRE.");
    }

    printNewCommandLine();
}