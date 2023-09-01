//all what we use here is a always .js file
const reuse = require("./util/reuse");

console.log("Welcome to NodeJS practise");

var a = 10;
var b = 20;
var c = a + b;
console.log(c);

var arrFruits = ["Apple", "Banana", "Cherry", "Orange", "Pineapple"];
reuse.printArray(arrFruits);
arrFruits.length;
arrFruits[0];
arrFruits[arrFruits.length - 1];
arrFruits.push("Grapes");
console.log(arrFruits);

var oEmp = {
  empID: 1001,
  empName: "Shivamani",
  salary: 10000,
  currency: "EUR",
  smoker: false,
};
reuse.printJSON(oEmp);
