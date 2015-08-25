App = Ember.Application.create();

App.Router.map(function () {
    // put your routes here
    this.route('punith', {
        path: 'punith'
    });
});

App.PunithRoute = Ember.Route.extend({

    actions: {

        headClicked: function () {

            alert("head clicked")
        }

    }
})

App.PunithController = Ember.Controller.extend({

    actions: {

        headClicked: function () {

            alert("head Clicked");
        }
    },
    firstName: "punith",
    lastName: "mithra"
})

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});