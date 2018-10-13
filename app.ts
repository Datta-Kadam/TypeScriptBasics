class Person {
    name:string;
    private type:string; //within the objects
    //from this object and from any child object inerited 
    private age:number =19;    
    constructor(name, public username) {
        this.name = name;
        console.log("name in Person =>",this.name);
    }
    printAge (){
        console.log("$$From Person class",this.name)
    }
}

const person = new Person('Datta','Kadam');
//console.log(person.printAge,person.name, person.username);

//Inheritance

class Datta extends Person {
    //name = 'Dattatrya'
    constructor(public car){
        super('Datta','Kadam');
        console.log("name in Person =>",this.name);
        this.callParentProtectedMethod();
    }    
    callParentProtectedMethod(){
        console.log("age in Datta =>",this.name);
        this.printAge();
    }

    // protected printAge (){
    //     console.log("@@From Datta class",this.name)
    // }
}

const datta= new Datta("Altima");
console.log(datta);

//getters and setters

class Plant {
    private _species:string = "Default";

    set species(value){}
    get species(){ return ''}
}

/// static properties and methods
class helpers {
   static PI:Number =3.14;

    static anotherMethod(value:string){
        return `console.log(value)`;
    }

}
console.log(helpers.PI);
let helperObj = new helpers();
console.log(helpers.anotherMethod('here'));


//Abstract Classes
abstract class Project {
    projectName:string="Default";
    budget:number;
    abstract changeName(name:string);
    calBudget(){
        return this.budget *2;
    }
}
class SecondProject extends Project {
    changeName(name:string):string {
        return this.projectName = "Second project details";
    }
}
console.log(new SecondProject().changeName(""));


//private constructor;

class OnlyOne {
    private static instance:OnlyOne;
    private constructor(public name:string){};
    static getInstance(name){
        if(!OnlyOne.instance){
           OnlyOne.instance = new OnlyOne(name);
        }
        return OnlyOne.instance;
    }
}

console.log(OnlyOne.getInstance('Datta Kadam bhai'));

console.log(OnlyOne.getInstance('Datta Kadam bhai1111'));


//