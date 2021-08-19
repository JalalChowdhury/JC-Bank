// common function

function getInputValue(inputId) {
    const anyInput = document.getElementById(inputId);
    const anyAmount = anyInput.value;

    //clear the deposite input feild
    anyInput.value = '';

    return anyAmount;

}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    return previousBalanceTotal ;

}

function updateBalance(anyAmount, isAdd) {
    
    const balanceTotal = document.getElementById('balance-total');
    // total balance cal
    let newBalanceTotal = 0;
    let previousBalance = getCurrentBalance();
    if (isAdd == true) {
        newBalanceTotal = parseFloat(anyAmount) + previousBalance;
    }
    else {
        newBalanceTotal = previousBalance - parseFloat(anyAmount);
    }

    balanceTotal.innerText = newBalanceTotal;

}

document.getElementById('deposit-button').addEventListener('click', function () {

    // get input deposite
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value ;

    const id = 'deposit-input';
    const depositAmount = getInputValue(id);


    if (parseFloat(depositAmount) > 0) {
        // current deposite 
        const depositTotal = document.getElementById('deposit-total');

        // total deposit calculation
        const newDepositTotal = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);

        // show updade deposite 
        depositTotal.innerText = newDepositTotal;

        //update balance amouunt

        // const balanceTotal = document.getElementById('balance-total');

        // // total balance cal
        // const newBalanceTotal = parseFloat(depositAmount)+ parseFloat(balanceTotal.innerText);

        // balanceTotal.innerText = newBalanceTotal ;

        updateBalance(depositAmount, true);
    }


    // //clear the deposite input feild
    // depositInput.value = '';


})

// withdraw javascript
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get input withdraw
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = withdrawInput.value;
    const id = 'withdraw-input';
    const withdrawAmount = getInputValue(id);

    const currentBalance = getCurrentBalance();

    if (parseFloat(withdrawAmount) > 0 && parseFloat(withdrawAmount) < currentBalance) {
        //current withdraw amount
        const withdrawTotal = document.getElementById('withdraw-total');

        // calculation withdraw
        const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(withdrawTotal.innerText);

        // showing update withdraw
        withdrawTotal.innerText = newWithdrawTotal;


        // update balance 
        // const balanceTotal = document.getElementById('balance-total');

        // const newBalanceTotal = parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount) ;

        updateBalance(withdrawAmount, false);

    }
    // // clear the withdraw input
    // withdrawInput.value ='';




})