let valueDisplays = document.querySelectorAll(".container");
let interval = 2000;

valueDisplays.forEach((container) => {
    let valueDisplay = container.querySelector(".num");
    let unitDisplay = container.querySelector(".num");
    let startValue = 0;
    let endValue = parseFloat(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    let isDecimal = unitDisplay.textContent.trim() === "KM";

    let counter = setInterval(function () {
        if (isDecimal) {
            startValue += 0.1;
            valueDisplay.textContent = startValue.toFixed(1);
        } else {
            startValue += 1;
            valueDisplay.textContent = Math.round(startValue)
        }
        if (startValue >= endValue) {
            clearInterval(counter);
        }
    }, duration);
})