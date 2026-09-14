document.getElementById('calculate-btn').addEventListener('click', function() {

    let totalBill = parseFloat(document.getElementById('total-bill').value);
    let serviceCharge = parseFloat(document.getElementById('service-charge').value);
    let numPeople = parseFloat(document.getElementById('num-people').value);

    let tipAmount = totalBill * serviceCharge / 100;

    let total = totalBill + tipAmount;

    let amountPerson = total / numPeople;

    document.getElementById('base').innerHTML = '₹' + totalBill.toFixed(2);

    document.getElementById('tip-amount').innerHTML = '₹' + tipAmount.toFixed(2);

    document.getElementById('total').innerHTML = '₹' + total.toFixed(2);

    document.getElementById('amount-person').innerHTML = '₹' + amountPerson.toFixed(2);

});