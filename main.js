
document.addEventListener("DOMContentLoaded", function () {

    printNewCommandLine();

    // Execute a function when the user releases a key on the keyboard
    document.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            var getInput = document.getElementById(inputElementId - 1).value;
            printOutputLine(getInput);
            printNewCommandLine();
        }
    });

});

