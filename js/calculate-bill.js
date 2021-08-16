//get a reference to the calculate button
    const calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
   const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
    const billStringElement = document.querySelector(".billString");
// do this for all the DOM elements
   
//create the function that will be called when the calculate button is pressed

    function calculateBtnClicked(){
    // logic goes here
        calculateBtnClicked.addEventListener('click', calculateBtnClicked);
    } 

//  * this function should read the string value entered - split it on a comma.
        function calculateBtnClicked(){
        // get the string entered in the textArea
        var billString = billStringElement.value;
        //split the string
        }

//  * loop over all the entries in the the resulting list
        var billString = billStringElement.value;
        var billItems = billString.split(",");
      
        for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
        billTotal += 2.75;
    }
}

//  * check if it is a call or an sms and add the right amount to the overall total
    if (billItem === "call"){
        billTotal += 2.75;
    }
    else if (billItem === "sms"){
        billTotal += 0.75;
    }

//  * once done looping over all the entries - display the total onto the screen in the billTotal element
    var billTotal = 0;
    var roundedBillTotal = billTotal.toFixed(2);
        billTotalElement.innerHTML = roundedBillTotal;


//link the function to a click event on the calculate button

    function calculateBtnClicked(){
    // logic goes here
        calculateBtnClicked.addEventListener('click', calculateBtnClicked);
    }