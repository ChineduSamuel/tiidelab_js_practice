// var firstName = "Chinedu";
// var lastName = "Samuel";
// name = "Johnson";
// Name = "Malik";
// name = "Bankole";
// country = "9ja";
// currency = "Dollar"
// console.log(firstName)

// test4and7 = 4<7;
// console.log('4 less than 7 is ' + test4and7)
// console.log(3>8)
// value = prompt("enter a value")
// value = parseInt(value)
// alert(typeof(value))

// Assignment
// A1: get an input from a user through a prompt
// 2: If the value is not Null or undefined: alert the value




// 1B 1:  get an input from a user through a prompt
// 2 convert the input to a no:
// 3: Check if the value of the input is >= 100 alert message Above a century.Above a century or above otherwise, do nothing.

// Excercise
// A. 1. get an input from user through a prompt 
// 2. if the value is not null nor undefined 
// alert the value



// B. 1. get an input from user through a promt 
// 2. convert the input to a number 
// 3. if the value of the input is greater than or equal to 100
//    alert a message:  " century or above"



// 1B: Assignment ANSWERS:
// value = prompt("Enter value")
// alert(value)

// if ((value !== null) ||(value !== undefined)) {      

//     alert(value);
// }else{
//     console.log("It's either null or undefined"); 
// }



// // 1B: Assignment ANSWERS
//  let Century = parseInt(prompt("Enter value"))

// if (Century >= 100){
// alert("This is a century or above");
// }else{
//     alert("Less than a century");
// }

// let age = Number(promt("Enter your age"))
// if (age >18 )
// statement = " \"You guys need to up your games.\" Said Mr PK "







// Simple USSD SERVICES


let message = prompt(`Welcome to our USSD services \n 1. Airtime - self
2. Airtime - others
3. Data
4. Transfer`);

message = parseInt(message);

if (message == 1) {
  let amount = prompt("Enter Amount");

  alert(`You've just recharged #${parseInt(amount)} airtime`);
} else if (message == 2) {
  prompt("Enter user number");
  let amount = prompt("Enter Amount");

  alert(`#${parseInt(amount)} airtime sent`);
} else if (message == 3) {
  message = prompt(`1. Self
  2. Others`);
  message = parseInt(message);
  if (message == 1) {
    let amount = prompt("Enter Amount");

    alert(`You've just recharged #${parseInt(amount)} Data`);
  } else if (message == 2) {
    prompt("Enter user number");
    let amount = prompt("Enter Amount");

    alert(`#${parseInt(amount)} Data sent`);
  } else {
    prompt("enter a valid number");
  }
} else if (message == 4) {
  let acct = prompt("Enter account number");
  let bank = prompt(`Select your bank 1.Sterling Bank
  2. UBA
  3. GT
  4. Access`);
  let amount = prompt("Enter amount")
  let ans = confirm(`Are you sure you want to send this ${parseInt(amount)} to ${acct}`);
  if(ans == true){
    alert(`you just transfered ${parseInt(amount)} to ${acct}`);
  }
 
}




