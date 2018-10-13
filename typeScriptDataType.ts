let myName: string = 'Max';
let value =20334343.43434343434;
//array
let hobbies :any[] =['cook','play'];
hobbies = [100];
//tuples
let address: [string,number] = ["supermarket",99];
//enums
enum Color {
    GRAY,GREEN,BLUE
}
let myColor:Color = Color.GREEN;
console.log(myColor);
let complexObject : complex =
{ data: [10,230,34], output: function(all:boolean):number[] {
        return this.data;
    }
}
//type alias
type complex = { data: number[], output: (all:boolean) => number[]};

//union types
let myRealReatAge: number | string =27;
myRealReatAge="27";
//check types
let finalValue = "A String";
if(typeof finalValue == "number"){
    console.log("final value", finalValue)
}

//never type
function neverRetuns(): never{
    throw new Error('An error');
}

// Nullable types
let canBeNull = 12;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;

