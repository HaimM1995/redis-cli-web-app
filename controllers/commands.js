var tasks = {};

function executeGet(params) {
    if (params.length !== 1) {
        printOutputLine(invalidParameterInput);
        return;
    }

    printOutputLine(getItem(params[0]));
}

function executeSet(params) {
    if (params.length !== 2) {
        printOutputLine(invalidParameterInput);
        return;
    }

    // Cancel Expire task for current key
    removeTimeoutTask(params[0]);

    setItem(params[0], params[1]);
    printOutputLine("OK");
}

function executeExists(params) {
    if (params.length === 0) {
        printOutputLine(invalidParameterInput);
        return;
    }

    printOutputLine(`(integer) ${doesKeyExist(params)}`);
}

function executeDel(params) {
    if (params.length === 0) {
        printOutputLine(invalidParameterInput);
        return;
    }

    printOutputLine(`(integer) ${deleteItems(params)}`);
}

function deleteItems(keys) {
    return keys.filter(key => localStorage.getItem(key) !== null)
        .map(key => deleteItem(key)).length;
}


function deleteItem(key) {
    removeTimeoutTask(key);
    removeItem(key);
}

function executeKeys(params) {
    if (params.length !== 1) {
        printOutputLine(invalidParameterInput);
        return;
    }

    printOutputList(getKeys(stringToRegexp(params[0])));
}

function executeExpire(params) {
    if (params.length !== 2) {
        printOutputLine(invalidParameterInput);
        return;
    }
    let key = params[0], seconds = params[1] * 1000;

    if (doesKeyExist(key) === 0) {
        printOutputLine(0);
        return;
    }

    if (seconds < 0) {
        deleteItem(key);
    } else {
        removeTimeoutTask(key);
        let timeoutId = setTimeout(deleteItem.bind(null, key), seconds);
        tasks[params[0]] = timeoutId;
    }

    printOutputLine(1);
}

function removeTimeoutTask(key) {
    clearTimeout(tasks[key]);
    delete tasks[key];
}