

// function  mathCaculation(a,b){
//   message = prompt("Enter the value you want to calculate")
//   message = parseInt(message)
//   console.log(a-b);
//  result = (a-b)
// }
// mathCaculation(10,5);
// alert('Your answer is: '+ result);


// Simple USSD SERVICES


 message = prompt(`Welcome to Sterling Bank USSD services: \n 1.Registration
2. Airtime-Self
3. Airtime-Others
4. Data
5. Transfer to Sterling
6. Transfer to Other banks
7. Account Balance
8. Open Account 
9. My Account No(s)
0. Next`);

message = parseInt(message);

if (message == 1) {
  let accountNumber = prompt("Kindly Enter account number");
  let lastDigit = prompt("Kindly Enter the last 6 digit of your ATM Card");
  let choosePin = prompt("Enter any four digit USSD pin of your \n Choice:");


  alert(`Account Number ${(accountNumber)} Registered  Successfully`);
} else if (message == 2) {
 
  let amount = prompt("Enter Amount");

  alert(`The Airtime #${parseInt(amount)} Recharged was Succesfully.`);
} else if (message == 3) {
  message = prompt(`Enter User's Phone Number`);
 
    let amount = prompt("Enter Amount");
  alert(`The Airtime #${parseInt(amount)} Sent was Succesfully.`);
  } else if (message == 4) {
    prompt(`Select: \n 1: Self 2: Others`);
    message = parseInt(message)
    let amount = prompt(`Select the Data Bundle of your choice: \n 1: 2gb - #1000 2: 5gb - #2000 3: 10gb - #4000 4: 40gb - #10000`);
    if(message == 1){
     
      let amount = prompt("You are about to Recharge 2gb: Proceed?");
      alert(`You've just recharged #${parseInt(amount)} Data`);
  
        // message = parseInt(message);
    
       }else if (message == 2) {
         
      
       
    }
    
  }
   
    
    