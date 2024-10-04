class NumberChecker {
    constructor() {
        this.input = document.getElementById('input');
        this.button = document.getElementById('button');
        this.result = document.getElementById('result');
        this.button.addEventListener('click', this.checkNumber.bind(this));
    }

    checkNumber() {
        const num = parseInt(this.input.value);
        if (isNaN(num)) {
            this.result.innerText = 'Please enter a valid number.';
        } else if (num > 0) {
            this.result.innerText = `${num} is a positive number.`;
        } else if (num < 0) {
            this.result.innerText = `${num} is a negative number.`;
        } else {
            this.result.innerText = `${num} is zero.`;
        }
    }
}

const numberChecker = new NumberChecker();