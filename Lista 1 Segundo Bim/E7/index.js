let value1 = document.querySelector('#value1');



let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
 
    let value3 = Number(value1.value);

    if (value3 % 2 === 0){
        varResult.textContent = "PAR"
    }
     else{
        varResult.textContent = "IMPAR"
     };

     
      
};



