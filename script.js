
    
     const display = document.getElementById('display');

    function appendNumber(num) {
      display.value += num;
    }

    function appendOperator(op) {
      if (op === '^2') {
        display.value = Math.pow(eval(display.value), 2);
      } else if (op === '^3') {
        display.value = Math.pow(eval(display.value), 3);
      } else {
        display.value += op;
      }
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }