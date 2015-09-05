function buttonController(button, display) {

    if (button.innerHTML === "=") {
        var result = display.result.value.replace(" ", "");
        display.result.value = eval(result);

    } else if (button.innerHTML === "C" || button.innerHTML === "c") {
        display.result.value = "";

    } else if (button.innerHTML === "Back") {
        var len = display.result.value.length;

        display.result.value = display.result.value.substring(0, len - 1);

    } else if (Model.prototype.operators.indexOf(button.innerHTML) !== -1) {
        display.result.value += " " + button.innerHTML + " ";
    } else {
        display.result.value += button.innerHTML;
    }

}