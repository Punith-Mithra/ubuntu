App = Ember.Application.create();

App.Router.map(function () {
    // put your routes here
    this.route('punith', {
        path: '/punith'
    });
    this.route('index', {
        path: '/'
    });
    this.route('arr', {
        path: '/arr'
    });
    this.route('obj', {
        path: '/obj'
    });
    this.route('help', {
        path: '/help'
    });
});

App.PunithRoute = Ember.Route.extend({

    actions: {

        headClicked: function () {

            alert("head clicked")
        }

    }
});





//< -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- >

/*
 * these are the custom helper functions wer you can call it from any 
 * wer in the handler script that is in html
 */

Ember.Handlebars.helper('makeShorter', function (value, option) {
    return value.substr(0, 2);
});

Ember.Handlebars.helper('length1', function (value, option) {
    var that = value;
    // var v = value.split(" ").length;

    //  return {
    return that.length;
    //   no_of_words: v
    // };
});




//< -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- >









//---------------------------------********** <example 1> ***********----------------------------------------------->
/*
 * this example helps you to understand how to create a route .
 * difference between controller and a route.
 * how to create an array and object and return them.
 */
App.PunithController = Ember.Controller.extend({
    // this function is hovered by App.PunithRoute = Ember.Route.extend
    // in example 2.
    actions: {

        headClicked: function () {

            alert("head Clicked");
        }
    },
    firstName: ["hie", "this", "is", "awesome"],
    lastName: "mithra",
    // the property shoud not repeat
    perosnal: {
        age: 30,
        DOB: 93

    },

});

App.ArrRoute = Ember.Route.extend({

    model: function () {

        return ["hello", "word"];

    }

});

App.ObjRoute = Ember.Route.extend({ // commented this because of changes in example 2

    model: function () {

        return {
            firstName: "Punith",
            lastName: "Mithra"
        };

    }

});

// -------------------------------********** </example 1> ***********--------------------------------------------------->

//---------------------------------********** <example 2> ***********----------------------------------------------->
/*
 * redirection.
 * rendering different template
 * 
 */

//App.PunithRoute = Ember.Route.extend({
//
//    redirect: function () {
//        this.transitionTo("/arr");
//    }
//});
//
//App.ObjRoute = Ember.Route.extend({
//
//    renderTemplate: function () {
//        this.render("punith");
//    }
//
//})
//

//---------------------------------********** <example 2> ***********----------------------------------------------->

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});