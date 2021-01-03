document.addEventListener("DOMContentLoaded", function () {
    printNewCommandLine();

    // Process the input when the user presses Enter 
    document.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            let input = document.getElementById(inputElementId - 1).value.trim()
                .split(" ").filter(str => str.length > 0);
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
                    printOutputLine("Command doesn't exist. Supported commands are: GET, SET, DEL, EXISTS, KEYS, EXPIRE.");
            }

            printNewCommandLine();
        }
    });

});