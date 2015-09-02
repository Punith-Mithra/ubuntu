function main(row, col) {

    var _result = new Result();
    Table(row, col);

    function Table(rows, cols) {

        count = 0;
        // var display = new Result();
        var model = new calcModel();

        var outerDiv = document.createElement("DIV");
        outerDiv.className="box";

        var numberDiv = document.createElement("DIV");
        numberDiv.className="one";

        var calDiv = document.createElement("DIV");
        calDiv.className="two";

       

        outerDiv.appendChild(_result.display);

        var table = document.createElement("TABLE");
       // table.setAttribute("border", 1);
       //table.setAttribute("align", "center");
        for (i = 0; i < rows; i++) {
            var row = document.createElement("TR");
            for (j = 0; j < cols; j++) {
                
                var col = document.createElement("TD");
                if(count<model.numbers.length)
                var btn = new Button(model.numbers[count]);
                else 
                    break;
                count++;
                col.appendChild(btn.btn);
                row.appendChild(col);
            }
            table.appendChild(row);
        }
        numberDiv.appendChild(table);
        count=0;

        table = document.createElement("TABLE");
                //table.setAttribute("border", 1);
        for (i = 0; i < rows; i++) {
            var row = document.createElement("TR");
            for (j = 0; j < cols; j++) {
                
                var col = document.createElement("TD");
                if(count<model.splChar.length)
                var btn = new Button(model.splChar[count], "button pink");
                else 
                    break;
                count++;
                col.appendChild(btn.btn);
                row.appendChild(col);
            }
            table.appendChild(row);
        }
        calDiv.appendChild(table);

        outerDiv.appendChild(numberDiv);
        outerDiv.appendChild(calDiv);
        document.body.appendChild(outerDiv);
        //document.body.appendChild(table);

    }

    function Result() {
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

        var that = this;
        
        this.btn = document.createElement("BUTTON");
        var t = document.createTextNode(value); // Create a text node    
        this.btn.appendChild(t);
        this.btn.className = cls || "button black";
        this.btn.value = value;
        //this.btn.setAttribute("onclick", click);
        //console.log()

        this.btn.onclick = function (value) {
            //alert(this.value);
            if(that.btn.value === "="){
                 _result.display.value = eval(_result.display.value);
            }else if(that.btn.value === "C" || that.btn.value === "c"){
                 _result.display.value = "";
            }else if(that.btn.value === "bk"){
                var len = _result.display.value.length;
                console.log(len);
                 _result.display.value = _result.display.value.substring(0, len-1);
            }else{
                 _result.display.value += this.value;
            }
           
        }

        return this;

    }





    Button.prototype = new Result();

    function calcModel(){
        this.numbers = ['1','2','3','4','5','6','7','8','9','0'];
        this.splChar = ['+','-','*','/','%','.','=','C','bk'];
    }

}
