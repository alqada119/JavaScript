var left=document.querySelector("#left");
var right=document.querySelector("#right")
var display=document.querySelector("p");
var pointer=0;
var display2=document.querySelector(".holder");
lists=["Rock","Paper","Scissor"];
let size=lists.length;
var displayresult=document.querySelector("#result");
var ans=document.querySelector("#answer");
function changedisplay(){
    left.addEventListener("click",()=>{
        pointer--;
        if(pointer<0){
            pointer=size-1;
        }
        display.innerHTML=lists[pointer]
    })
    right.addEventListener("click",()=>{
        pointer++;
        if(pointer>=size){
            pointer=0;
        }
        display.innerHTML=lists[pointer]
    })
    
};


function replaceimage(){
    let button2=document.querySelector("#play");
    button2.addEventListener("click",()=>{
        let image=document.querySelectorAll("img");
        image.forEach(Element=>{
            if(display.innerHTML===Element.getAttribute("id")){
                display2.insertBefore(Element,display)
            }
        })
        game(); 
    })
    
}

function game(){
    var result="";
    for(i=0;i<size;i++){
        var pc=lists[Math.floor(Math.random()*size)]
    }
    let playerChoice=display.innerHTML;
    console.log("Player chooses: " + playerChoice);
    console.log("PC chooses: " + pc);
    ans.innerHTML=pc;

    // Determine the winner
    if (playerChoice === pc) {
        result="Tie!";
        displayresult.innerHTML="Tie"
    } else if (
        (playerChoice === "Rock" && pc === "Scissor") ||
        (playerChoice === "Paper" && pc === "Rock") ||
        (playerChoice === "Scissor" && pc === "Paper")
    ) {
        result="Player wins!";
    } else {
        result="PC wins!";
    }
    
    displayresult.innerHTML=result
}

changedisplay();
replaceimage();
