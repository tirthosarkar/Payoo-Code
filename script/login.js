console.log("Loging functionality is coming soon...");

document.getElementById("login-btn").addEventListener("click", function() {
   //1- get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    //2- get the pin number input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    //3- march pin & mobile number
        if (contactNumber == "01518750179" && pin == "1234"){

        //     //4- if match show success alert
            alert("Login successful!");
            window.location.assign("home.html");
        } else {
        //     //5- if not match show error alert
            alert("Invalid mobile number or pin. Please try again.");
        }
});