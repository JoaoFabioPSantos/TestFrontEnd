const userSide = document.querySelector('div.userSide');
const sendBtt = userSide.querySelector('.sendButton'); 

const output = document.querySelector(".output");
const templateRectangleOutput = output.querySelector('template.rectangleOutput');

let inputQuantity = userSide.querySelector('.numberInput');
let number = parseInt(inputQuantity.value);

inputQuantity.addEventListener("change", (ev) => {
    output.innerHTML = '';
    number = ev.target.value;

    console.log(number);    

    for(let i = 0; i < number; i++) {
        const cloneTemplate = templateRectangleOutput.content.cloneNode(true);
        output.prepend(cloneTemplate);
        output.querySelector('.number').innerHTML = number-i;
    }
})