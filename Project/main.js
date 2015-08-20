var app = app || {}; // if the app object is already exists then do nothing else create a nee object


// this function is in (). which says that this function will auto execute when ever the js is called.

// or you can do this app.main(); both are same.

app.main = (function () {

    var elements = {
        noteField: document.querySelector(".write-note");
        noteSubmit: document.querySelector(".submit-note");
        noteList: document.querySelector(".notes");
        noNoteFound: document.querySelector(".no-note-found");

    }; // this is to cache the elemnts on the page.

    var notes = [];

    var attachEvents = function () {


    };

    var addAsFirstChild = function (parient, child) {
        var parentNode = parent;
        childNode = child;
        if (parientNode.firstChild) {
            parentNode.insertBefore(child, parient.firstChild);

        } else {

            parentNode.appendChild(child);
        }
    };

    var View = function (notes, containerEl) {

        var index = notes.indexOf(note),
            that = this;

        this.render = function () {
            this.listItem = document.createElement('li');
            this.paragraph = document.createElement('p');
            this.actions = document.createElement('ul');
            this.removeButton = document.createElement('li');
            this.likeButtton = document.createElement('li');

            this.listItem.classList.add('note');
            this.actions.classList.add('note');
            this.actions.classList.add('note');
            this.actions.classList.add('note');
        };
        this.like = function () {

        };
        this.remove = function () {

        };
        this.attachEvents = function () {

        };
        this.init = function () {

        };
    };

    var Model = function (notesData, collection) {

        this.data = notesData;
        this.save = function () {
            collection.push(this.data);
            localStorage.setItem('notes', JSON.stringify(collection));
            return this;
        };

        this.like = function () {
            this.data.liked = !this.data.liked;
            var indexToUpdate = collection.indexOf(this.data);
            collection.splice(indexToUpdate, 1, this.data);
            localStorage.setItem('notes', JSON.stringify(collection));
            return this;
        };

        this.remove = function () {
            var indexToRemove = collection.indexOf(this.data);
            collection.splice(indexToRemove, 1);
            localStorage.setItem('notes', JSON.stringify(collection));
            return this;
        };


    }

})()