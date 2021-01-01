function executeGet(command) {
    var result = "parameters error";
    if (command.length == 2) {
        result = getItem(command[1]);
    }

    printOutputLine(result);
}

function executeSet(command) {
    var result = "OK";
    if (command.length == 3) {
        setItem(command[1], command[2]);
    } else {
        result = "invalid parameters amount";
    }

    printOutputLine(result);
}

function executeExists(command) {
    var result = "";

    if (command.length > 1) {
        result = checkExistance(command);
    } else {
        result = "invalid parameters amount";
    }

    printOutputLine(result);
}

function executeDel(command) {
    var result = "";

    if (command.length > 1) {
        result = deleteItems(command);
    } else {
        result = "invalid parameters amount";
    }

    printOutputLine(result);
}

