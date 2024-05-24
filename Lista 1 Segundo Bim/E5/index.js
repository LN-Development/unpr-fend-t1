let value1 = document.querySelector('#value1');
let value2 = document.querySelector('#value2');

let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
    let value3 = Number(value1.value);
    let value4 = Number(value2.value);


    if (value3 > value4){
        varResult.textContent = value3;
    }
     else{
        varResult.textContent = value4;
     };
};