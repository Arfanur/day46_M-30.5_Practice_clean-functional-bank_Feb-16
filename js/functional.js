function getInputValue(fieldId) {
    const inputTag = document.getElementById(fieldId);
    const inputInText = inputTag.value;
    const inputValue = parseFloat(inputInText);
    inputTag.value = '';
    return inputValue;
}
function getInnerTextValue(fieldId) {
    const totalTag = document.getElementById(fieldId);
    const totalInText = totalTag.innerText;
    const previousTotal = parseFloat(totalInText);
    return previousTotal;
}
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
function updateBalance() {
    const depositAmount = getInnerTextValue('deposit-total');
    const withdrawAmount = getInnerTextValue('withdraw-total');
    const newBalance = (depositAmount - withdrawAmount) + 1240;
    document.getElementById('balance-total').innerText = newBalance;
    return newBalance;
}
// Deposit handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance();
    }

});
// Withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance();
    }

});
