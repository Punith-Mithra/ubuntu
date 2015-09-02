function buttonController(button, display) {

    if (button.innerHTML === "=") {
        display.result.value = eval(display.result.value);

    } else if (button.innerHTML === "C" || button.innerHTML === "c") {
        display.result.value = "";

    } else if (button.innerHTML === "Back") {
        var len = display.result.value.length;

        display.result.value = display.result.value.substring(0, len - 1);

    } else {
        display.result.value += button.innerHTML;
    }

}