// var menu = ["steak","pasta","pizza","sandwich"];
// var order = prompt ("May I take your order please");

// if ( order==0) {
// console.log ("you shall have some of our best pice of stake" );
// }

// if (order==1) { 
// console.log ("you shall have some of our yummiest italin pasta");
// }

// if (order==2) {
// console.log ("you shall have some of our most delicious pizza");
// }

// if (order==3) {
// console.log ("you shall have some of our tastiest sandwich");
//     }


// switch (order){
//     case "0":
//     console.log ("you have chosen our best pice of stake");
//     break;
//     case "1":
//     console.log ("you have chosen our yummiest italin pasta");
//     break;
//     case "2":
//     console.log ("you have chosen our most delicious pizza");
//     break;
//     case "3":
//     console.log ("you have chosen our tastiest sandwich");
//     break; 
// }


// var n1 = prompt("ضع الرقم الاول");
// var n2 = prompt("ضع الرقم الثاني");
// var operation = prompt("*,-,+,/");

// if (operation == null){
//     console.log("Fill the boxes");
// }

// if (operation == '+'){
//     console.log(n1 + n2);
// }


// if (operation == '/'){
//     console.log(n1 / n2);
// }


// if (operation == '-'){
//     console.log(n1 - n2);
// }

// if (operation == '*'){
//     console.log(n1 * n2);
// }

// switch (operation) {
// case "+": console.log (n1 + n2);
// break;
// case "-": console.log (n1 - n2);
// break;
// case "/": console.log (n1 / n2);
// break;
// case "*": console.log (n1 * n2);
// break;
// default:
//     break;
// }



// <!-- الخطوات -->
// <!-- قم باختبار قيمة عمرك باستخدام البرنامج -->
// <!-- بحيث يقوم البرنامج بإرجاع كلمة روضة، مدرسة أو جامعة
//      حسب قيمة عمرك  -->

// <!-- قم بكتابة السطور البرمجية اللازمة لعمل ذلك -->

var age = 16;

let MyGrade = prompt("How old are you ?");

if (MyGrade > age) {
  alert("Collage");
}
if (MyGrade == age) {
  alert("HighSchool");
}
if (MyGrade < age) {
  alert("middle schoole");
}