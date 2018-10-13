var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        //from this object and from any child object inerited 
        this.age = 19;
        this.name = name;
        console.log("name in Person =>", this.name);
    }
    Person.prototype.printAge = function () {
        console.log("$$From Person class", this.name);
    };
    return Person;
}());
var person = new Person('Datta', 'Kadam');
//console.log(person.printAge,person.name, person.username);
//Inheritance
var Datta = /** @class */ (function (_super) {
    __extends(Datta, _super);
    //name = 'Dattatrya'
    function Datta(car) {
        var _this = _super.call(this, 'Datta', 'Kadam') || this;
        _this.car = car;
        console.log("name in Person =>", _this.name);
        _this.callParentProtectedMethod();
        return _this;
    }
    Datta.prototype.callParentProtectedMethod = function () {
        console.log("age in Datta =>", this.name);
        this.printAge();
    };
    return Datta;
}(Person));
var datta = new Datta("Altima");
console.log(datta);
//getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () { return ''; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
/// static properties and methods
var helpers = /** @class */ (function () {
    function helpers() {
    }
    helpers.anotherMethod = function (value) {
        return "console.log(value)";
    };
    helpers.PI = 3.14;
    return helpers;
}());
console.log(helpers.PI);
var helperObj = new helpers();
console.log(helpers.anotherMethod('here'));
//Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var SecondProject = /** @class */ (function (_super) {
    __extends(SecondProject, _super);
    function SecondProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondProject.prototype.changeName = function (name) {
        return this.projectName = "Second project details";
    };
    return SecondProject;
}(Project));
console.log(new SecondProject().changeName(""));
//private constructor;
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    ;
    OnlyOne.getInstance = function (name) {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne(name);
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
console.log(OnlyOne.getInstance('Datta Kadam bhai'));
console.log(OnlyOne.getInstance('Datta Kadam bhai1111'));
