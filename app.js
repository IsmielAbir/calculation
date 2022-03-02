document.getElementById('calculate').addEventListener('click', function() {
    const foodItesms = document.getElementById('food');
    const foodItem = foodItesms.value;


    //expense 

    const rentItems = document.getElementById('rent');
    const rentItem = rentItems.value;

    const clothItems = document.getElementById('cloths');
    const clothitem = clothItems.value;

    const totalExpense = document.getElementById('expense');
    const total = totalExpense.innerText;

    const totalExpenseAmount = parseFloat(total) + parseFloat(foodItem) + parseFloat(rentItem) + parseFloat(clothitem);

    totalExpense.innerText = totalExpenseAmount;



    //balance

    const totalIncome = document.getElementById('income');
    const incomeAmount = totalIncome.value;


    const totalBalance = document.getElementById('balance');
    const total2 = totalBalance.innerText;

    const balanceAmount = parseFloat(incomeAmount) - parseFloat(totalExpenseAmount);

    totalBalance.innerText = balanceAmount;

    if (balanceAmount < 0 == true) {
        document.getElementById('error').style.display = 'block';
    }



    calculate.value = '';







});

//savings 

document.getElementById('save').addEventListener('click', function() {
    const totalIncome2 = getInput(balanceAmount);

    const savingAmount = document.getElementById('savings');
    const savingTotalAmount2 = savingAmount.value;
    const savingAmount2 = (savingTotalAmount2 * totalIncome2) / 100;
    const remain = document.getElementById('saving').innerText;




    save.value = '';
});