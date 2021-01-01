function getItem(key) {
    return localStorage.getItem(key);
}

function setItem(key, value) {
    localStorage.setItem(key, value);
}

function checkExistance(keys) {
    var i = 1;
    var counterOfExist = 0;

    while (i < keys.length) {
        if (localStorage.getItem(keys[i]) !== null) {
            counterOfExist++;
        }
        i++;
    }
    return counterOfExist;
}

function deleteItems(keys) {
    var i = 1;
    var counterOfExist = 0;

    while (i < keys.length) {
        if (localStorage.getItem(keys[i]) !== null) {
            localStorage.removeItem(keys[i]);
            counterOfExist++;
        }
        i++;
    }
    return counterOfExist;
}

function getKeys() {
    return Object.entries(localStorage);
}