const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory');
const storageCost = document.getElementById('storage');
const deliveryCharge = document.getElementById('delivery');

const memory1 = document.getElementById('memory-1');
const memory2 = document.getElementById('memory-2');
const storage1 = document.getElementById('ssd-1');
const storage2 = document.getElementById('ssd-2');
const storage3 = document.getElementById('ssd-3');
const free = document.getElementById('no-charge');
const shippingCharge = document.getElementById('charge-included');

const totalValue = document.getElementById('total');
const promocode = document.getElementById('promo').value;
const applyButton = document.getElementById('apply');
const promoAmount = document.getElementById('promo-total');


function noExtra(id) {
    const zeroExtra = document.getElementById(id)
    zeroExtra.innerText = 0;
    return zeroExtra.innerText;

}

function updateTotal() {
    const price = Number(bestPrice.innerText) + Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCharge.innerText);
    totalValue.innerText = price;
    // promoAmount.innerText = price;
    promoAmount.innerText = price - price * (20 / 100);
    console.log(promoAmount.innerText);
/* 
    if (promocode == 'stevekaku') {
        applyButton.addEventListener('click', function () {
            promoAmount.innerText = price - price * (20 / 100);
        })
    }
     */
} 


memory1.addEventListener('click', function () {

    memoryCost.innerText = noExtra('memory')
    updateTotal();
})
memory2.addEventListener('click', function () {
    // const memoryCost = document.getElementById('memory');
    memoryCost.innerText = 180;
    updateTotal();
})

// ssd 

storage1.addEventListener('click', function () {

    storageCost.innerText = noExtra('storage')
    updateTotal();
})

storage2.addEventListener('click',function () {
    // const storageCost = document.getElementById('storage');
    storageCost.innerText = 100;
    updateTotal();
})
storage3.addEventListener('click',function () {
    // const storageCost = document.getElementById('storage');
    storageCost.innerText = 180;
    updateTotal();
})

// delivery 

free.addEventListener('click', function () {

    deliveryCharge.innerText = noExtra('delivery')
    updateTotal();
})

shippingCharge.addEventListener('click', function () {

    
    deliveryCharge.innerText = 20;
    updateTotal();
})
