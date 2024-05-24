let value1 = document.querySelector('#value1');
let value2 = document.querySelector('#value2');
let value3 = document.querySelector('#value3');
let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
    let value1 = Number(value1.value);
    let value2 = Number(value2.value);
    let value3 = Number(value3.value);
    
    let medA = (value1 + value2 + value3)/3;
    let somP = (value1 *3)+(value2*2)+(value3 *5);
    
    let somMed = somP+medA;
    let somMed2 = somP+medA/2;
    varResult.innerHTML= medA +"<br>"+ somP+"<br>" + somMed +"<br>"+ soMed2
};