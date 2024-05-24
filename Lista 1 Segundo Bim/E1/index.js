let value1 = document.querySelector('#value1');

let value2  = document.querySelector('#value2');

let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
    let value3 = Number(value1.value);
    let value4 = Number(value2.value);
     varResult.textContent  = value4 - value3;
    
};


