let value1 = document.querySelector('#value1');



let calcButton = document.querySelector('#calcButton');

let varResult = document.querySelector('#varResult');

calcButton.onclick = function calcValor()
{
 
    let value3 = Number(value1.value);

    if (value3 == 1){
        varResult.textContent = "PARAFUSO"
    }
     else if(value3 == 2){
        varResult.textContent = "PORCA"
     }else if(value3 == 3){
        varResult.textContent = "PREGO"
     };

     
      
};



