// const phonePlusBtn = document.querySelector('#phonePlus');
// const phoneMinusBtn = document.querySelector('#phoneMinus');




// //String to number
// function stringToNum(id) {
//     var mobileCounterValue = document.getElementById(id).value;
//     let mobileCounterValueNumber = parseFloat(mobileCounterValue);
//     return mobileCounterValueNumber; 
// }
// //Text to number
// function textToNum(id) {
//     var mobilepriceValue = document.getElementById(id).innerText;
//     let mobilepriceValueNumber = parseFloat(mobilepriceValue);
//     return mobilepriceValueNumber; 
// }

// // counter increase
// function counterIncrease(id) {
//     let name = stringToNum(id);
//     const ciNumber = document.getElementById(id).value =  name + 1; 
//     return ciNumber;
// }

// // counter decrease
// function counterDecrease(id) {
//     let name = stringToNum(id); 
//     document.getElementById(id).value = name - 1; 
// }

// function updateProductPrice(id, item) {
//     const totalSingleprice = id * item;
//     return totalSingleprice;
// }
// function updateProductPriceDec(id, item) {
//     const totalSingleprice = id * item;
//     return totalSingleprice;
// }

// const mobilePrice = textToNum('currentPhoneBalance');
// const mobileCoverPrice = textToNum('currentPhoneBalance');

// function rander() {
//     let mobileCounterNo  = counterIncrease('mobileCounter');
//     const mobilePriceContent = updateProductPrice(mobilePrice, mobileCounterNo);
//     document.getElementById('currentPhoneBalance').innerText = mobilePriceContent;
// }
// phonePlusBtn.addEventListener('click', function() {
//     rander();
// })

// phoneMinusBtn.addEventListener('click', function() {
//     counterDecrease('mobileCounter'); 
//     let mobileCounterNod  = counterDecrease('mobileCounter');
//     const mobilePriceContentd = updateProductPrice(mobilePrice, mobileCounterNod);
//     document.getElementById('currentPhoneBalance').innerText = mobilePriceContentd;
// })

