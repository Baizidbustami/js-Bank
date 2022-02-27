 function mahi (product,price,addValue){
    const inputNumbar = document.getElementById(product + '-number');
    let iphoneInput = inputNumbar.value;
    if(addValue == true){
        iphoneInput = parseInt (iphoneInput) + 1;
    }
    else if(iphoneInput > 0){
        iphoneInput = parseInt (iphoneInput) - 1;
    }
    inputNumbar.value = iphoneInput;

    const sumValue = document.getElementById(product + '-total');
    sumValue.innerText = iphoneInput * price;
    fahim ()
 }

 function getInputValue (product){
    const inputNumbar = document.getElementById(product + '-number');
    let iphoneInput = parseInt(inputNumbar.value);
    return iphoneInput;

 }
 function fahim (){
     const ali = getInputValue('phone') * 1219;
     const dula = getInputValue('case') * 59
     const subTotal= ali+dula;
     const text = subTotal/10
     const totalBlc = text+subTotal;
      document.getElementById('sub-total').innerText=subTotal
      document.getElementById('tax-amount').innerText=text;
      document.getElementById('total-price').innerText=totalBlc;
 }


document.getElementById('phone-plus').addEventListener('click', function(){
    // const sumValue = document.getElementById(product+'-number');
    // sumValue.innerText = iphoneInput * price
     mahi ('phone', 1219, true)
    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    mahi ('phone' ,1219, false)
   
})
document.getElementById('case-plus').addEventListener('click', function(){
    // const sumValue = document.getElementById(product+'-number');
    // sumValue.innerText = iphoneInput * price
     mahi ('case', 59, true)
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    mahi ('case' ,59, false)
   
})


// document.getElementById('phone-plus').addEventListener('click', function(){
    // const pohneInput = document.getElementById('phone-number');
    // const inputNumbarText = pohneInput.value;
    // const inputNumbar = parseFloat(inputNumbarText)
    //  pohneInput.value= inputNumbar + 1;
    //  updateCaseNumbar(true)
    //  const pohneTitle =document.getElementById('phone-total');
    //  const pohneTitleText = pohneTitle.innerText;
    //  pohneTitle.innerText = pohneTitleTotal * pohneInput.value;
// })
// document.getElementById('phone-minus').addEventListener('click', function(){
    // const pohneInput = document.getElementById('phone-number');
    // const inputNumbarText = pohneInput.value;
    // const inputNumbar = parseFloat(inputNumbarText)
    //  pohneInput.value= inputNumbar - 1
    // updateCaseNumbar(false)
    //  const pohneTitle =document.getElementById('phone-total');
    //  const pohneTitleText = pohneTitle.innerText;
    //  const pohneTitleTotal = parseFloat(pohneTitleText);
    //  pohneTitle.innerText = pohneTitleTotal / pohneInput.value;
// })
