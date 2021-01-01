document.addEventListener("DOMContentLoaded", function () {

    printNewCommandLine();

    // Execute a function when the user releases a key on the keyboard
    document.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            var getCommand = document.getElementById(inputElementId - 1).value;
            command = getCommand.split(" ");
            switch (command[0].toUpperCase()) {
                case "GET":
                    executeGet(command);
                    break;
                case "SET":
                    executeSet(command);
                    break;
                case "DEL":
                    executeDel(command);
                    break;
                case "KEYS":
                    break;
                case "EXISTS":
                    executeExists(command);
                    break;
                case "EXPIRE":
                    break;
                default:
                    printOutputLine("invalid command");
            }

            printNewCommandLine();
        }
    });

});