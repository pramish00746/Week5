function calculateSquare() {
    const input = document.getElementById('numberInput');
    const num = parseInt(input.value);
    
    if (!isNaN(num)) {
        const square = num * num;
        document.getElementById('result').textContent = `Square of ${num} is ${square}`;
    }
    input.value = ''; 
}


document.getElementById('numberInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateSquare();
    }
});


document.getElementById('calculateButton').addEventListener('click', calculateSquare);