let screen = document.getElementById('output_screen');
buttons = document.querySelectorAll('button');
let output = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        //console.log('Button text is', buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            output += buttonText;
            screen.value = output;
        }else if(buttonText=='÷'){
            buttonText = '/';
            output += buttonText;
            screen.value = output;
        }else if (buttonText=='C'){
            output = "";
            screen.value = output;
        }else if(buttonText=='='){
            screen.value = eval(output);
        } else{
            output += buttonText;
            screen.value = output; 
        }
    })
}