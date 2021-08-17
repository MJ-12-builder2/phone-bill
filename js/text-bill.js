// get a reference to the textbox where the bill type is to be entered
    var billTypeTextElement = document.querySelector(".billTypeText");

// the event listener is declared below here
    //get the value entered into the bill type text field,
        var callsTotal = 0;
        var smsTotal = 0;
    //check if it is a 'call' or 'sms',
    if (billTypeTextElement === "call"){
        callsTotal += 2.75
    }
    else if (billTypeTextElement === "sms"){
        smsTotal += 0.75;
    }

    //add the correct value to the callsTotal or smsTotal variable,
   
    var totalCost = callsTotal + smsTotal;
    totalCost.innerHTML = totalCost.toFixed(2);

    //and update the totals that is displayed on the screen.
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }

//get a reference to the add button
   if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }

//create a variable that will keep track of the total bill
    function textBillTotal(){
        // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
        // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    }

//add an event listener for when the add button is pressed
        var callsTotal = 0;
        var smsTotal = 0;
    //check if it is a 'call' or 'sms',
        if (billTypeTextElement === "call"){
        callsTotal += 2.75
    }
        else if (billTypeTextElement === "sms"){
        smsTotal += 0.75;
    }
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total

// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
    function textBillTotal(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
    }
    