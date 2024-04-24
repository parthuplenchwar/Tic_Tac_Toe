let btns = document.querySelectorAll(".btn");
let result = document.querySelector(".result");
let newGame = document.querySelector(".new-game");
let turn = 0;
let win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
console.log(btns[0])
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        
        if(turn == 0){
      btn.innerText = "X";
    //   btn.style.backgroundColor = "yellow";
      turn = 1;
        }
        else{
            btn.innerText = "O"; 
            // btn.style.backgroundColor = "yellow"; 
            turn = 0;
        }
        btn.disabled = true;

        checkwin();
    })
    
});

const checkwin = ()=>{
    for(let pattern of win){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
    
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos1 == pos3){
               result.innerText =`Congratulations , Player ${pos1} Wins!`;
               btns.forEach((btn)=>{
               
                btn.disabled = true;
               })
            }
        }
}
}

newGame.addEventListener("click", ()=>{
   btns.forEach((btn)=>{
    btn.innerText = "";
    result.innerText = "";
    // btn.style.backgroundColor = "white";
    btn.disabled = false;
   })

})