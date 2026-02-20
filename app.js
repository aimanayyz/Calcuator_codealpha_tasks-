   const display = document.getElementById('display');
    const equalButton = document.querySelector('.equal');

    function appendValue(value) {
        display.value += value;
        display.classList.remove('error');
    }

    function clearDisplay() {
        display.value = '';
        display.classList.remove('error');
    }

    function calculateResult() {
        try {
            const result = eval(display.value);
            display.value = result;
            equalButton.classList.add('bounce');
            setTimeout(() => equalButton.classList.remove('bounce'), 400);
        } catch (error) {
            display.value = "Error";
            display.classList.add('error');
        }
    }