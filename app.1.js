var myName = 'Max';
var value = 20334343.43434343434;
//array
var hobbies = ['cook', 'play'];
hobbies = [100];
//tuples
var address = ["supermarket", 99];
//enums
var Color;
(function (Color) {
    Color[Color["GRAY"] = 0] = "GRAY";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var myColor = Color.GREEN;
console.log(myColor);
var complexObject = { data: [10, 230, 34], output: function (all) {
        return this.data;
    }
};
//union types
var myRealReatAge = 27;
myRealReatAge = "27";
//check types
var finalValue = "A String";
if (typeof finalValue == "number") {
    console.log("final value", finalValue);
}
//never type
function neverRetuns() {
    throw new Error('An error');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
