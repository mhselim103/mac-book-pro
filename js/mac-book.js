// pricinig 
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory');
const storageCost = document.getElementById('storage');
const deliveryCharge = document.getElementById('delivery');
// total 
const totalValue = document.getElementById('total');
const promoAmount = document.getElementById('promo-total');

// makes value zero 
function noExtra(id) {
    const zeroExtra = document.getElementById(id)
    zeroExtra.innerText = 0;
    return zeroExtra.innerText;
}
// updating total 
function updateTotal() {
    const price = Number(bestPrice.innerText) + Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCharge.innerText);
    totalValue.innerText = price;
    promoAmount.innerText = price;
} 
// event handlers 
document.getElementById('memory-1').addEventListener('click', function () {

    memoryCost.innerText = noExtra('memory')
    updateTotal();
})
document.getElementById('memory-2').addEventListener('click', function () {
    memoryCost.innerText = 180;
    updateTotal();
})

// ssd 
document.getElementById('ssd-1').addEventListener('click', function () {

    storageCost.innerText = noExtra('storage')
    updateTotal();
})
document.getElementById('ssd-2').addEventListener('click',function () {
    // const storageCost = document.getElementById('storage');
    storageCost.innerText = 100;
    updateTotal();
})
document.getElementById('ssd-3').addEventListener('click',function () {
    // const storageCost = document.getElementById('storage');
    storageCost.innerText = 180;
    updateTotal();
})

// delivery 
document.getElementById('no-charge').addEventListener('click', function () {

    deliveryCharge.innerText = noExtra('delivery')
    updateTotal();
})
document.getElementById('charge-included').addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    updateTotal();
})
// applying promo code 
document.getElementById('apply').addEventListener('click', function () {
    const promocode = document.getElementById('promo');
    // validation 
    if (promocode.value == 'stevekaku') {
        promoAmount.innerText = totalValue.innerText - totalValue.innerText * (20 / 100);  
    }
    promocode.value= ''; 
})