function main(row, col) {

    var _result = new Result();
    Table(row, col);

    function Table(rows, cols) {

        count = 0;
        // var display = new Result();

        var table = document.createElement("TABLE");
        var row1 = document.createElement("TR");
        var col1 = document.createElement("TD");
        col1.setAttribute("colspan", 3);
        col1.appendChild(_result.display);
        row1.appendChild(col1);
        table.appendChild(row1);
        //table.setAttribute("border", 1);
        for (i = 0; i < rows; i++) {
            var row = document.createElement("TR");
            for (j = 0; j < cols; j++) {
                count++;
                var col = document.createElement("TD");

                var btn = new Button(count);

                col.appendChild(btn.btn);
                row.appendChild(col);
            }
            table.appendChild(row);
        }


        var row1 = document.createElement("TR");



        var col1 = document.createElement("TD");
        var btn = new cancel("C", "button orange");
        col1.appendChild(btn.btn);
        row1.appendChild(col1);

        var col1 = document.createElement("TD");
        var btn = new Button("0");
        col1.appendChild(btn.btn);
        row1.appendChild(col1);


        var col1 = document.createElement("TD");
        var btn = new equals("=", "button orange");
        col1.appendChild(btn.btn);
        row1.appendChild(col1);

        table.appendChild(row1);

        var row1 = document.createElement("TR");

        var col1 = document.createElement("TD");
        var btn = new Button("+", "button pink");
        col1.appendChild(btn.btn);
        row1.appendChild(col1);

        var col1 = document.createElement("TD");
        var btn = new Button("-", "button pink");
        col1.appendChild(btn.btn);
        row1.appendChild(col1);

        var col1 = document.createElement("TD");
        var btn = new Button("*", "button pink");
        col1.appendChild(btn.btn);
        row1.appendChild(col1);

        table.appendChild(row1);

        document.body.appendChild(table);
    }

    function Result() {
        this.number1;
        this.number2;
        this.result;
        this.display = document.createElement("INPUT")
        this.display.setAttribute("type", "text");
        this.resultObj = function () {
            return this;
        };
    }

    function Button(value, cls) {

        this.btn = document.createElement("BUTTON");
        var t = document.createTextNode(value); // Create a text node    
        this.btn.appendChild(t);
        this.btn.className = cls || "button black";
        this.btn.value = value;
        //this.btn.setAttribute("onclick", click);
        this.btn.onclick = function (value) {
            //alert(this.value);
            _result.display.value += this.value;

        }

        return this;

    }

    function equals(value, cls) {
        this.btn = document.createElement("BUTTON");
        var t = document.createTextNode("="); // Create a text node    
        this.btn.appendChild(t);
        this.btn.className = cls || "button black";
        // this.btn.value = value;
        this.btn.onclick = function (value) {
            //alert(this.value);
            _result.display.value = eval(_result.display.value);

        }

    }

    function cancel(value, cls) {
        this.btn = document.createElement("BUTTON");
        var t = document.createTextNode(value); // Create a text node    
        this.btn.appendChild(t);
        this.btn.className = cls || "button black";
        // this.btn.value = value;
        this.btn.onclick = function (value) {
            //alert(this.value);
            _result.display.value = "";

        }

    }


    Button.prototype = new Result();
}