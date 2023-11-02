
const input = document.querySelector(".userinput");
const output = document.querySelector(".output");
const keys = document.querySelectorAll("button");


keys.forEach(key=> {
         key.addEventListener("click",calculate);

         function calculate() {
            let buttontext = this.innerText;
            if(buttontext==="AC"){
                input.value ="";
                output.value ="";
                return;
            }
            if(buttontext==="Del"){
                input.value = input.value.substring(0,input.value.length-1);
                return;
            }
            if(buttontext==="="){
                output.value=eval(input.value);
            }
            else{
                input.value += buttontext;
                return;
            }
        }
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                output.value=eval(input.value);
            }
          });
});



