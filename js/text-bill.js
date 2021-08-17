// get a reference to the textbox where the bill type is to be entered
   
// the event listener is declared below here
    //get the value entered into the bill type text field,
       
    //check if it is a 'call' or 'sms',
    
    //add the correct value to the callsTotal or smsTotal variable,
   
   

    //and update the totals that is displayed on the screen.
   

//get a reference to the add button
  

//create a variable that will keep track of the total bill
    
    
    //update the totals that is displayed on the screen.
    

//add an event listener for when the add button is pressed
   
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total

// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
    

    //color the total based on the criteria
    
    

    var billTypeTextElement = document.querySelector(".billTypeText");
    var addToBillBtnElement = document.querySelector(".billTypeText");
    var callTotalOneElement = document.querySelector(".billTypeText");
    var smsTotalOneElement = document.querySelector(".billTypeText");
    var totalOneElement = document.querySelector(".billTypeText");

        var callsTotal = 0;
        var smsTotal = 0;
    
        function textBillTotal(){
            // get the value entered in the billType textfield
            var billTypeText= billTypeText.value.trim();
            // update the correct total
            if (billTypeText === "call"){
                callsTotal += 2.75
            }
            else if (billTypeText === "sms"){
                smsTotal += 0.75;
            }
            //color the total based on the criteria
            if (totalCost >= 50){
                // adding the danger class will make the text red
                totalCostElem.classList.add("danger");
            }
            else if (totalCost >= 30){
                totalCostElem.classList.add("warning");
            }
            
            //update the totals that is displayed on the screen.
            callsTotalElem.innerHTML = callsTotal.toFixed(2);
            smsTotalElem.innerHTML = smsTotal.toFixed(2);
            var totalCost = callsTotal + smsTotal;
            totalCostElem.innerHTML = totalCost.toFixed(2);
        
            textTotalAddBtn.addEventListener('click', textBillTotal);

            
        }
        
        // function textBillTotal(){

        //     // ... other code here
            
        //     //update the totals that is displayed on the screen.
        //     callsTotalElem.innerHTML = callsTotal.toFixed(2);
        //     smsTotalElem.innerHTML = smsTotal.toFixed(2);
        //     var totalCost = callsTotal + smsTotal;
        //     totalCostElem.innerHTML = totalCost.toFixed(2);
        // }
       