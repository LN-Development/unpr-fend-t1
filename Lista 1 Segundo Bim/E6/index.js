let value1 = document.querySelector('#value1');
let value2 = document.querySelector('#value2');
let value7 = document.querySelector('#value7');
let value8 = document.querySelector('#value8');

let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
    let maior = 0;
    let value3 = Number(value1.value);
    let value4 = Number(value2.value);
    let value5 = Number(value7.value);
    let value6 = Number(value8.value);
    if (value3 > value4){
        maior = value3;
    }
     else{
        maior = value4;
     };

     if (maior > value5)
        {}
        else{
            maior = value5;
        };
        if (maior > value6)
        {}
        else{
            maior = value6;
        };

     varResult.textContent = maior;   
};



