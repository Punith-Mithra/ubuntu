function Model() {
    this.result = document.createElement("INPUT");
    this.result.setAttribute("type", "text");
    this.result.readOnly = true;
}

Model.prototype.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
Model.prototype.operators = ['+', '-', '*', '/', '%', '.', '=', 'C', 'Back'];