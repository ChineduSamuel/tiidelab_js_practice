



// Simple USSD SERVICES


 message = prompt(`Welcome to Sterling Bank USSD services: \n 1.Registration
2. Airtime-Self
3. Airtime-Others
4. Data
5. Transfer`);

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
    alert(`You've just recharged #${parseInt(amount)} Data`);
 }else if (message == 5) {
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
      
   
    
   
  
