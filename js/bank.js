
   function getINputValue(input){
       const inputButton=document.getElementById(input);
       const inputButtonText=inputButton.value;
       const inputButtonTotal=parseFloat(inputButtonText);
       inputButton.value=''
       return inputButtonTotal;
   }
   function allahuAkbar(inputAmount,amount){
    const totalElement=document.getElementById(inputAmount);
    // addBalance
    const totalText=totalElement.innerText;
    const previousTotal= parseFloat(totalText);
    totalElement.innerText= previousTotal+amount;
   }
  function appdedAmount (inputButtonTotal, isAdd){
    const totalDeposit = document.getElementById('aupded-valance');
    const totalDepositText=totalDeposit.innerText;
    const totalDepositBalance=parseFloat(totalDepositText);
    if(isAdd==true){
        totalDeposit.innerText=totalDepositBalance+inputButtonTotal;
    }
    else{
        totalDeposit.innerText=totalDepositBalance - inputButtonTotal;
    }
  }

  document.getElementById('deposit-btn').addEventListener('click', function(){
    const inputButtonTotal=getINputValue('inupt-btn1');
    if(inputButtonTotal > 0){
        allahuAkbar('deposit-amount', inputButtonTotal);
    appdedAmount (inputButtonTotal, true);  
    }
})


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const totalinputButton2=getINputValue('inuput-btn2');
    if(totalinputButton2 > 0){
        allahuAkbar('withdrawbtn', totalinputButton2)
    appdedAmount (totalinputButton2, false) 
    }
})

                        //   ১ম পার্ট

// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const inputButton=document.getElementById('inupt-btn1');
//     const inputButtonText=inputButton.value;
//     const inputButtonTotal = parseFloat(inputButtonText);

//     const deposit=document.getElementById('deposit-amount');
//     // addBalance
//     const innerDeposit=deposit.innerText;
//     const innerDepositTotal= parseFloat(innerDeposit);
//     const totalBalance= innerDepositTotal+inputButtonTotal;
     
//     deposit.innerText=totalBalance;
//     // addTotalBalance
//     const totalDeposit = document.getElementById('aupded-valance');
//     const totalDepositText=totalDeposit.innerText;
//     const totalDepositBalance=parseFloat(totalDepositText);
//     totalDeposit.innerText=totalDepositBalance+inputButtonTotal;

//     inputButton.value='' 
// })

            //   ২য় পার্ট

// document.getElementById('withdraw-btn').addEventListener('click', function(){
//     const inputButton2=document.getElementById('inuput-btn2');
//     const inputButton2Text= inputButton2.value;
//     const totalinputButton2= parseFloat(inputButton2Text);
    
//    const withdraw = document.getElementById('withdrawbtn');
//    const totalWithdraw=withdraw.innerText;
//    const totalAddWithdraw=parseFloat(totalWithdraw);
//    withdraw.innerText = totalAddWithdraw + totalinputButton2;
         
//     //  addWithdraw  
//     const fahim = document.getElementById('aupded-valance');
//     const ashik = fahim.innerText;
//     const kayom=parseFloat(ashik);
//     const osman= kayom-totalinputButton2;
//     fahim.innerText=osman;
     
//     inputButton2.value=''
// })