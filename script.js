// STEPS
// -Create an empty string that updates each time a button is pressed
//store that instead of answer
//add a clear button, which if pressed sets the string back to ""
//if equal is pressed parse the string to integer and replace innerhtml to result

//tip queryselectorall(buttons) and loop 
// Note if this is to be released to public, use "Math.js" instead of "Eval"

let answer="";
let buttons=document.querySelectorAll("button");
let answers=document.querySelector(".answer");
buttons.forEach(Element=>{
    Element.addEventListener("click",function(){
        if(Element.innerHTML==="AC"||answer.length>20){ //if the numbers entered are larger than the width,reset
            answer=""
            answers.innerHTML="";
        }
        else{
            if(Element.innerHTML==="="){
                // answers.innerHTML=eval(answers.innerHTML);
                try {
                    answer=answer.replace("×", "*");
                    answer=answer.replace("−", "-");
                    answer=answer.replace("÷", "/");
                    answers.innerHTML=(eval(answer));
                } catch (error) {
                    answers.innerHTML="Error"
                }
            }
            else{
                answer=answer.concat(this.innerHTML);
                answers.innerHTML=answer;
            }
        }
        
})});

