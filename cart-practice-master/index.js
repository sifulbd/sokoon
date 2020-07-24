const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');
const counter1 = document.getElementById('mobileCounter');
const price1 = document.getElementById('price1');

const plus2 = document.getElementById('plus2');
const minus2 = document.getElementById('minus2');
const counter2 = document.getElementById('mobileCounter2');
const price2 = document.getElementById('price2');

const subtotal = document.getElementById('subtotal');
const totalPrice = document.getElementById('total');
let subtotalNumber = parseInt(subtotal.innerText);
let totalNumber = parseInt(totalPrice.innerText);

let price1Number = parseInt(price1.innerText);
let price2Number = parseInt(price2.innerText);

let pricex  = price1Number + price2Number;
document.getElementById('subtotal').textContent = pricex;
document.getElementById('total').textContent = pricex;

function plusIncrease(theItem){
    if(theItem === 0){
        console.log('this is o');
    }else {
        theItem += 1;
    }   
    return theItem;
}

function plusDecrease(theItem){
    if(theItem === 1){
        theItem = 1;
    }else {
        theItem -= 1;
    }   
    return theItem;
}

function productPrice(priceNo, counter) {
    let totalPrice;
    if(counter < 1) {
        totalPrice = priceNo;
        return totalPrice;
    }else {
        totalPrice = priceNo * counter;    
        return totalPrice;
    }
}

function subtotalPrice(price) {
    document.getElementById('subtotal').textContent = price;
    document.getElementById('total').textContent = price;
}

function singlePriceCalc(originalPrice, TotalCounter) {
    const singlePrice = productPrice(originalPrice, TotalCounter);
    return singlePrice;
}
plus1.addEventListener('click', function() {
    const totalCountnumber = plusIncrease(parseInt(counter1.value));
    console.log(totalCountnumber);
    document.getElementById('mobileCounter').value = totalCountnumber;

    const singlePrice1 = singlePriceCalc(price1Number, totalCountnumber);
    document.getElementById('price1').textContent = singlePrice1;

    const pricer = parseInt(document.getElementById('price1').innerText) 
+ parseInt(document.getElementById('price2').innerText) ;

    subtotalPrice(pricer);
});

minus1.addEventListener('click', function() {
    const totalCountdenumber = plusDecrease(parseInt(counter1.value));
    document.getElementById('mobileCounter').value = totalCountdenumber;

    const singlePrice1 = singlePriceCalc(price1Number, totalCountdenumber);
    document.getElementById('price1').textContent = singlePrice1;

    const pricer = parseInt(document.getElementById('price1').innerText) 
    + parseInt(document.getElementById('price2').innerText) ;

    subtotalPrice(pricer);
})

plus2.addEventListener('click', function() {
    const totalCountnumber = plusIncrease(parseInt(counter2.value));
    console.log(totalCountnumber);
    
    document.getElementById('mobileCounter2').value = totalCountnumber;

    const singlePrice2 = singlePriceCalc(price2Number, totalCountnumber);
    document.getElementById('price2').textContent = singlePrice2;

    const pricer = parseInt(document.getElementById('price1').innerText) 
    + parseInt(document.getElementById('price2').innerText) ;

    subtotalPrice(pricer);
});

minus2.addEventListener('click', function() {
    const totalCountdenumber = plusDecrease(parseInt(counter2.value));
    document.getElementById('mobileCounter2').value = totalCountdenumber;

    const singlePrice2 = singlePriceCalc(price2Number, totalCountdenumber);
    document.getElementById('price2').textContent = singlePrice2;

    const pricer = parseInt(document.getElementById('price1').innerText) 
    + parseInt(document.getElementById('price2').innerText) ;

    subtotalPrice(pricer);
})