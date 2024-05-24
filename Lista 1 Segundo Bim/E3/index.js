let value1 = document.querySelector('#value1');


let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
    let value3 = Number(value1.value);
    
     varResult.textContent  = value3 * 1.01;
    
};