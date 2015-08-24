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
        table.setAttribute("align", "center");
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


        var row2 = new addRow();

        var btn = new cancel("C", "button orange");
        row2.addColm(btn.btn);

        var btn = new Button("0");
        row2.addColm(btn.btn);

        var btn = new equals("=", "button orange");
        row2.addColm(btn.btn);

        table.appendChild(row2.row);

        var row2 = new addRow();

        var btn = new Button("+", "button pink");
        row2.addColm(btn.btn);

        var btn = new Button("-", "button pink");
        row2.addColm(btn.btn);

        var btn = new Button("*", "button pink");
        row2.addColm(btn.btn);

        table.appendChild(row2.row);

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

    function addRow() {
        this.row = document.createElement("TR");
        this.addColm = function (button) {
            var col = document.createElement("TD");
            col.appendChild(button);
            col.setAttribute("align", "center");
            this.row.appendChild(col);
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