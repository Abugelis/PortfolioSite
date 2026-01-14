const text = "Landing pages, portfolios, and small business websites — fast, responsive, and reliable";
const target = document.getElementById("typing");
let index = 0;

function type() {
    if(index < text.length) {
        target.textContent += text[index];
        index++;
        setTimeout(type, 60);
    }
}

type();
