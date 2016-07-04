var objects;
(function (objects) {
    var Person = (function () {
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++
        Person.prototype.Speak = function () {
            console.log(this._name + " says hello.");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
function init() {
    console.log('Game Started Now!');
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map