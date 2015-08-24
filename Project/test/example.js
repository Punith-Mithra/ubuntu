function Table(rows, cols) {

    count = 0;
    var display = new Result();

    var table = document.createElement("TABLE");
    var row1 = document.createElement("TR");
    var col1 = document.createElement("TD");
    col1.setAttribute("colspan", 3);
    col1.appendChild(display.display);
    row1.appendChild(col1);
    table.appendChild(row1);
    //table.setAttribute("border", 1);
    for (i = 0; i < rows; i++) {
        var row = document.createElement("TR");
        for (j = 0; j < cols; j++) {
            count++;
            var col = document.createElement("TD");

            var btn = new Button(display, count);
            //var t = document.createTextNode(count); // Create a text node    
            //btn.appendChild(t);
            //btn.className = "button black";
            col.appendChild(btn.value);
            row.appendChild(col);
        }
        table.appendChild(row);
    }



    document.body.appendChild(table);
}

function Result() {
    this.number1;
    this.number2;
    this.result;
    this.display = document.createElement("INPUT")
    this.display.setAttribute("type", "text");
    document.body.appendChild(this.display);
}

function Button(type, value) {

    this.value = document.createElement("BUTTON");
    var t = document.createTextNode(count); // Create a text node    
    this.value.appendChild(t);
    this.value.className = "button black";
    this.type = type;

    this.setnum1 = function (value, display) {

        return display += value;

    }

    return this;

}

Button.prototype = new Result();