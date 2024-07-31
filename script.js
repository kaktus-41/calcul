document.getElementById('arbitrageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const spreadPercent = parseFloat(document.getElementById('spreadPercent').value) / 100;
    const numRounds = parseInt(document.getElementById('numRounds').value);

    const finalAmount = initialAmount * Math.pow((1 + spreadPercent), numRounds);
    const profit = finalAmount - initialAmount;

    document.getElementById('finalAmount').innerText = `Итоговая сумма: ${finalAmount.toFixed(2)} сомони`;
    document.getElementById('profit').innerText = `Прибыль: ${profit.toFixed(2)} сомони`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('arbitrageForm').reset();
    document.getElementById('finalAmount').innerText = '';
    document.getElementById('profit').innerText = '';
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.innerText = document.body.classList.contains('dark') ? 'Переключить на светлый режим' : 'Переключить на темный режим';
});
