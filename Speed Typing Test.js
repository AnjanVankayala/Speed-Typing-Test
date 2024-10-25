let contain = document.getElementById("speedTypingTest");
let time = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteinput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let counter = 0;
let uniqueId = setInterval(function() {
    time.textContent = counter;
    counter = counter + 1;
}, 1000);

spinnerEl.classList.remove("d-none");
let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};

function fetching(url, options) {
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplay.textContent = jsonData.content;
            spinnerEl.classList.add("d-none");
        });
}
fetching(url, options);
submit.addEventListener("click", function() {
    console.log(quoteinput.value);
    console.log(quoteDisplay.value);

    if (String(quoteinput.value) == String(quoteDisplay.textContent)) {
        result.textContent = "You typed in " + String(counter - 1) + "seconds";
        clearInterval(uniqueId);
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});

reset.addEventListener("click", function() {
    counter = 0;
    fetching(url, options);
});
