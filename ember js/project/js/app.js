App = Ember.Application.create();

App.Router.map(function () {
   // put your routes here
   this.route('calculator', {
      path: '/'
   });
});


App.CalculatorController = Ember.Controller.extend({
   btn: model(),
   actions: {

      btnClicked: function (value) {

         this.btnController(value);
      }

   },
   result: "",

   /*
    * this is the controller.
    */

   btnController: function (button) {
      var value = button.value;
      var type = button.type;
      var result = this.result;

      if (type === 'equals') {
         result = result.replace(' ', '')
         this.set('result', eval(result));
      } else if (type === 'cancel') {
         this.set('result', '');
      } else if (type === "number") {
         this.set('result', result + '' + value);
      } else if (type === "operator") {
         this.set('result', result + ' ' + value + ' ');
      } else
         this.set('result', result + '' + value);

   }


})