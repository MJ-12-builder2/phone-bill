// get a reference to the sms or call radio buttons
    var checkedRadionBtn = document.querySelector("input[name='billItemType']:checked");
        if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    }
//get a reference to the add button
    var callsTotal = 0;
    var smsTotal = 0;
    //check if it is a 'call' or 'sms',
    if (checkedRadionBtn === "bill"){
    callsTotal += 2.75
    }
    else if (checkedRadionBtn === "sms"){
    smsTotal += 0.75;
//create a variable that will keep track of the total bill
    function textBillTotal(){
        // get the value entered in the billType textfield
        var billTypeEntered = billTypeText.value.trim();
        // update the correct total
        if (billTypeEntered === "bill"){
        callsTotal += 2.75
    }
        else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
}
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons



// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
    }