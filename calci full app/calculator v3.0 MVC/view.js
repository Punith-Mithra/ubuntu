function main() {

   var model = new Model(); // this creates 
   Calci();

   // this method create the entire calculator.
   function Calci() {


      var outerDiv = document.createElement("DIV");
      outerDiv.className = "box";

      outerDiv.appendChild(model.result);

      var numberDiv = new numberTable(); //new number pad is created 
      outerDiv.appendChild(numberDiv); // number pad is appended to the outer Div

      var operatorDiv = new operatorsTable();
      outerDiv.appendChild(operatorDiv);


      document.body.appendChild(outerDiv);


   }


   //  This creates a row and provides a method to create additional colomns
   function Row() {
      this.row = document.createElement("TR");
      this.addColm = function (button) {
         var col = document.createElement("TD");
         col.appendChild(button);
         col.setAttribute("align", "center");
         this.row.appendChild(col);
      };

   }


   // this finction will create a btton with some properties
   function Button(value, cls) {

      this.btn = document.createElement("BUTTON");
      var t = document.createTextNode(value); // Create a text node    
      this.btn.appendChild(t);
      this.btn.className = cls || "button black";
      this.value = value;
      this.btn.onclick = function () {
         buttonController(this, model);
      }

   }


   // this method is used to create number Pad.
   function numberTable() {
      var rows = 4,
         cols = 3;
      var numberDiv = document.createElement("DIV");
      numberDiv.className = "one";
      var table = document.createElement("TABLE");
      for (i = 0, count = 0; i < rows; i++) {
         var row = new Row();
         for (j = 0; j < cols; j++, count++) {
            if (count < model.numbers.length)
               var btn = new Button(model.numbers[count]);
            else
               break;

            row.addColm(btn.btn);
         }
         table.appendChild(row.row);
      }
      numberDiv.appendChild(table);
      return numberDiv;
   }


   // this Method is used to create an operator pad.
   function operatorsTable() {
      var rows = 4,
         cols = 3;
      var operatorDiv = document.createElement("DIV");
      operatorDiv.className = "two";
      var table = document.createElement("TABLE");
      for (i = 0, count = 0; i < rows; i++) {
         var row = new Row();
         for (j = 0; j < cols; j++, count++) {
            if (count < model.operators.length)
               var btn = new Button(model.operators[count], "button pink");
            else
               break;

            row.addColm(btn.btn);
         }
         table.appendChild(row.row);
      }
      operatorDiv.appendChild(table);
      return operatorDiv;
   }
}