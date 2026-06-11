document.getElementById("cashout-btn").addEventListener("click", function() {
console.log("cashout button clicked");
//1- get the agent number & validate

const cashoutNumberInput = document.getElementById("cashout-number")
const cashoutNumber = cashoutNumberInput.value;
console.log(cashoutNumber);

//2- get the cashout amount input
const cashoutAmountInput = document.getElementById("cashout-amount")
const cashoutAmount= cashoutAmountInput.value;
console.log(cashoutAmount);

//3- get the pin input
const balanceElement = document.getElementById("balance");
const balance = balanceElement.innerText;
console.log(balance);

//4- calculate new balance
const newBalance = Number(balance) - Number(cashoutAmount);
console.log("new balance", newBalance)

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    
    //5- Get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === "1234") {
        //5-1 true:: show an alert > set Balance
        alert("Cashout Successfull");
        console.log("new balance", newBalance);
    }
    else {
        //5-2 true:: show an error alert > return
        alert("Invalid Pin")
    }

    // //1- get the agent number input
    //  const numberInput = document.getElementById("agent-number");
    //  const contactNumber = numberInput.value;
    //  console.log(contactNumber);

    //  //2- get the cashout amount input
    //  const amountInput = document.getElementById("cashout-amount");
    //  const cashoutAmount = amountInput.value;
    //  console.log(cashoutAmount);

    //  //3- get the pin input
    //  const pinInput = document.getElementById("cashout-pin");
    //  const cashoutPin = pinInput.value;
    //  console.log(cashoutPin);
});