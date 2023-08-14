const Gameboard=(() =>{
    let board=["","","","","","","","",""]
    const getboard=()=>board
    const placexo=(index,marker)=>{
        if (index>=0&&index<board.length&&board[index]===""){
            board[index]=marker
            return true
        }
        return false
    }
    return {getboard,placexo}
})();
// console.log(Gameboard.getboard)



// function rendertodom(){

//     };  
// })}

const player=(name,marker)=>{
    const getname=()=>name
    const getmarker=()=>marker
    return {getname,getmarker}
}



const displaygame=(()=>{
    let first=true
    const player1=player("Ahmed","X")
    const player2=player("Anas","O")
    const display=document.querySelector(".display")
    const blocks=document.querySelectorAll("div")
    display.innerHTML=player1.getname()
    blocks.forEach(block => {
        if(block.id){
            block.addEventListener("click",()=>{
                if(first){           
                    if(Gameboard.placexo(block.id,player1.getmarker())){
                        Gameboard.placexo(block.id,player1.getmarker())
                        block.innerHTML=player1.getmarker()
                        if(checkgame(player1.getmarker())){
                            display.innerHTML=player1.getname()+" Won"
                            
                        }
                        else{
                            first=!first
                            display.innerHTML=player2.getname()
                        }
                        
                    }
                    
                }
                else{if(Gameboard.placexo(block.id,player2.getmarker())){
                    Gameboard.placexo(block.id,player2.getmarker())
                    block.innerHTML=player2.getmarker()
                    if(checkgame(player2.getmarker())){
                        display.innerHTML=player2.getname()+" Won"
                        
                    }
                    else{
                        first=!first
                        display.innerHTML=player1.getname()
                }
                    
                }}
                
      })}

    
    
})})()

let reload=document.querySelector("#re")
reload.addEventListener("click",()=>{
    window.location.reload();
})


function checkrow(player) {
    const Gameboards = Gameboard.getboard();
    for (let i = 0; i < 9; i += 3) {
        if (Gameboards[i] === player && Gameboards[i + 1] === player && Gameboards[i + 2] === player) {
            console.log(player + " Wins");
            return true;
        }
    }
    return false;
}

function checkcol(player) {
    const Gameboards = Gameboard.getboard();
    for (let i = 0; i < 3; i++) {
        if (Gameboards[i] === player && Gameboards[i + 3] === player && Gameboards[i + 6] === player) {
            console.log(player + " Wins");
            return true;
        }
    }
    return false;
}

function checkdiag(player) {
    const Gameboards = Gameboard.getboard();
    if (Gameboards[0] === player && Gameboards[4] === player && Gameboards[8] === player) {
        console.log(player + " Wins");
        return true;
    }
    if (Gameboards[2] === player && Gameboards[4] === player && Gameboards[6] === player) {
        console.log(player + " Wins");
        return true;
    }
    return false;
}

function checkgame(player) {
    return checkrow(player) || checkcol(player) || checkdiag(player);
}