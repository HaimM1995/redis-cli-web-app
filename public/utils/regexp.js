// This function adjusts the user pattern to support glob-style patterns (like redis)
function stringToRegexp(pattern) {
    return new RegExp(pattern.replace(/\*/g, ".*").replace(/\?/g, ".?"));
}