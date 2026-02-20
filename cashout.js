document.getElementById("cashout-btn").addEventListener("click", function() {
    //1- get the agent number input
     const numberInput = document.getElementById("agent-number");
     const contactNumber = numberInput.value;
     console.log(contactNumber);

     //2- get the cashout amount input
     const amountInput = document.getElementById("cashout-amount");
     const cashoutAmount = amountInput.value;
     console.log(cashoutAmount);

     //3- get the pin input
     const pinInput = document.getElementById("cashout-pin");
     const cashoutPin = pinInput.value;
     console.log(cashoutPin);
});