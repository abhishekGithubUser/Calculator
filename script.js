
let output = document.querySelector(".out-display");

let button= document.querySelectorAll(".inp");

let oprent1=null;
let oprent2=null;
let opretor=0;



    for( let i=0 ; i<button.length; i++){

        button[i].addEventListener("click" , function() {
            let value= this.getAttribute('data-value');

            if(value == '+'){
                opretor='+';
                oprent1=parseFloat(output.textContent);
                output.innerText="";

            } else if(value == '-'){
                opretor='-';
                oprent1=parseFloat(output.textContent);
                output.innerText="";

            } else if(value == '*'){
                opretor='*';
                oprent1=parseFloat(output.textContent);
                output.innerText="";

            } else if(value == '/'){
                opretor='/';
                oprent1=parseFloat(output.textContent);
                output.innerText="";

            } else if(value == '%'){
                opretor='%';
                oprent1=parseFloat(output.textContent);
                output.innerText="";

            } else if(value == 'AC'){
                oprent1=null;
                oprent2=null;
                opretor=0;
                output.innerText="";

            } else if(value == '='){
                
                oprent2=parseFloat(output.textContent);
                let finalOutput= oprent1 + " "+ opretor + " "+ oprent2;
                let result =eval(finalOutput);
                output.innerHTML=result;

            }else if(value == '+/-'){
                let toggal= -1 +"* "+ output.textContent;
                let toggelOut=eval(toggal);
                output.innerText=toggelOut;
            }
            else{
                output.innerText += value;
            }
        })
    }


