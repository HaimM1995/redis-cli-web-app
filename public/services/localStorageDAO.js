function getItem(key) {
    return localStorage.getItem(key);
}

function setItem(key, value) {
    localStorage.setItem(key, value);
}

function doesKeyExist(keys) {
    return keys.filter(key => getItem(key) !== null).length;
}

function removeItem(key) {
    localStorage.removeItem(key);
}

function getKeys(regexp) {
    return Object.keys(localStorage).filter(key => regexp.test(key));
}