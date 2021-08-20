
const memory1 = document.getElementById('memory-1');
const memory2 = document.getElementById('memory-2');
const storage1 = document.getElementById('ssd-1');
const storage2 = document.getElementById('ssd-2');
const storage3 = document.getElementById('ssd-3');
const free = document.getElementById('no-charge');
const shippingCharge = document.getElementById('charge-included');

const totalValue = document.getElementById('total');
const promocode = getElementById('promo');
const applyButton = document.getElementById('apply')
const promoAmount = document.getElementById('promo-total')


function noExtra(id) {
    const zeroExtra = document.getElementById(id)
    totalValue.innerText = total() - parseFloat(zeroExtra.innerText);
    zeroExtra.innerText = 0;
}

function updateTotal() {
    
} 

memory1.addEventListener('click', function () {

    const memoryCost = noExtra('memory')
})
memory2.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory');
    memoryCost.innerText = 180;
    
})

// ssd 

storage1.addEventListener('click', function () {

    const storageCost = noExtra('storage')
    
})

storage2.addEventListener('click',function () {
    const storageCost = document.getElementById('storage');
    storageCost.innerText = 300;
    
})
storage3.addEventListener('click',function () {
    const storageCost = document.getElementById('storage');
    storageCost.innerText = 500;
    
})

// delivery 

free.addEventListener('click', function () {

    const cost = noExtra('delivery')
})

shippingCharge.addEventListener('click', function () {

    const deliveryCharge = document.getElementById('delivery')
    deliveryCharge.innerText = 20;
    
})