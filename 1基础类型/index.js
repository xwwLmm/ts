var isBoolean = false;
console.log('boolean:', isBoolean);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binLiteral = 10;
var octalLiteral = 484;
console.log('number: ', decLiteral);
var username = 'Bob'; // TS2451 变量命名 'name'
var intro = "My name is " + username;
console.log('string: ', intro);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log('array: ', arr1, arr2);
var x = ['1', 2];
console.log('元组 tuple: ', x);
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 9] = "Blue";
})(Color || (Color = {}));
console.log('枚举: ', Color.Red);
var notSure = 4;
console.log('any: before:', typeof notSure, notSure);
notSure = '4';
console.log('any: before:', typeof notSure, notSure);
function warnUser() {
    alert('This is my warning message');
}
// Never 类型以后再说
