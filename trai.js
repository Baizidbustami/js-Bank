
function display (input){
        const inputButton = document.getElementById(input)
        const inputButtonText = inputButton.value;
        let inputButtonTotal = parseFloat(inputButtonText);
        inputButton.value='';
        return inputButtonTotal;
}
function allahuAkbar (depositInput, amount){
        const deposit = document.getElementById(depositInput);
        const depositTotal = deposit.innerText;
        const innerDeposit = parseFloat (depositTotal);
         let totalBalance = innerDeposit+amount;
        deposit.innerText = totalBalance;

}

function mahi (inputButtonTotal){
        const totalDeposit = document.getElementById('aupded-valance');
        const totalDepositText = totalDeposit.innerText;
        const totalDepositBalance = parseFloat(totalDepositText);
        totalDeposit.innerText = totalDepositBalance+inputButtonTotal;
}
               function depositBtn(){
        const inputButtonTotal = display('inupt-btn1');

        allahuAkbar ('deposit-amount',inputButtonTotal)  ;
        mahi (inputButtonTotal)     
}
 


