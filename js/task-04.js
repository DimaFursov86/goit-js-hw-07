const increamentBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");
const counterValue = document.querySelector("#value");

const CounterPlugin = function ({ counterValue = 0, step = 1 } = {}) {
    this._value = counterValue;
    this._step = step;
    this._bindEvents();
};

CounterPlugin.prototype.increament = function () {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

CounterPlugin.prototype.valueShow= function () {
    counterValue.textContent = this._value;
};

CounterPlugin.prototype._bindEvents = function () {
    increamentBtn.addEventListener("click", () => {
        this.increament();
        this.valueShow();
    });
    decrementBtn.addEventListener("click", () => {
        this.decrement();
        this.valueShow();
    });
};

const counter = new CounterPlugin();