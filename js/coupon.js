document.getElementById('input-coupon').addEventListener('keyup', function (event) {
    const coupon = event.target.value;

    const btnApply = document.getElementById('btn-apply');

    const inputPriceField = document.getElementById('input-price');
    const inputPrice = parseFloat(inputPriceField.value);

    const pay = document.getElementById('discount-amount');

    if(typeof inputPrice !== 'number' && typeof coupon === 'string'){
        alert('please enter valid input')
    }
    else if (coupon === 'DISC30') {
        btnApply.removeAttribute('disabled');
    }
    else {
        btnApply.setAttribute('disabled', true);
        pay.innerText = inputPrice;
    }
})


document.getElementById('btn-apply').addEventListener('click', function () {
    const inputPriceField = document.getElementById('input-price');
    const inputPrice = parseFloat(inputPriceField.value);

    const pay = document.getElementById('discount-amount');

    const discountAmount = inputPrice * .30;
    const discount = inputPrice - discountAmount;
    pay.innerText = discount;

    if(typeof inputPrice !== 'number'){
        alert('please enter valid input')
    }

    // inputPriceField.value = '';
})