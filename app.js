const number1 = document.getElementById("number-1");
const number2 = document.getElementById("number-2");
const result1 = document.getElementById("result-1");
const result2 = document.getElementById("result-2");
const button = document.getElementById("button");

function demo() {
    var one = Math.floor(Math.random() * 6 + 1);
    var two = Math.floor(Math.random() * 6 + 1);

    number1.innerHTML = (one);
    number2.innerHTML = (two);

    if (one >= two) {
        if (one == two) {
            result1.innerHTML = ("Draw!");
            result2.innerHTML = ("Draw!");
        }
        else {
            result1.innerHTML = ("Won :) ");
            result2.innerHTML = ("Lost :( ");
        }

    }
    else {
        result1.innerHTML = ("Lost :( ");
        result2.innerHTML = ("Won :) ");
    }

    button.innerHTML = ("Play Again");
}