let h1=document.querySelector("h1");
h1.style.color="dodgerblue"
h1.style.fontFamily="sans-serif"
let resetBtn=document.querySelector("#reset");
let btns=document.querySelectorAll(".btn");
let Btn=document.getElementsByTagName("button");
let parent=document.querySelector(".parent_div");
let winnerMsg=document.createElement("div");
let resetGame=document.querySelector("#reset");
let newGame=document.querySelector(".newGame")

let turn0=true;//playerX,//player0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
btns.forEach((bt)=>{
    bt.addEventListener("click",()=>{
        console.log("Button was Clicked");
        if(turn0){
            bt.innerText="O";
            bt.style.color="black";
            turn0=false;
        }else{
            bt.innerText="X";
            bt.style.color="red";
            turn0=true;
        }
        bt.disabled="true";
        let winner=checkWinner();
        if (!winner){
            const alldisabled=Array.from(btns).every(btn => btn.disabled);
            if(alldisabled){  
                parent.prepend(winnerMsg);        
                winnerMsg.classList.add("winnerMssg");
                winnerMsg.innerText="NoBody Wins Play Again!!";
                newGame.classList.add("hide");
                newGame.classList.remove("newGame");
            }
        }
    })
})

const disableBtn=()=>{
    for (Button of btns){
        Button.disabled="true";
    }
}
const resetButn=()=>{
    for (button of btns){ //needs to understand more
        button.disabled=false;
        button.innerText="";
        winnerMsg.classList.remove("winnerMssg");
        winnerMsg.innerText="";
        newGame.classList.add("newGame");

    }
}

const checkWinner=()=>{
    for (pattern of winPatterns){
        let pos1Val=btns[pattern[0]].innerText;
        let pos2Val=btns[pattern[1]].innerText;
        let pos3Val=btns[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner-Winner Chicken Dinner !!","Player",pos1Val);
                parent.prepend(winnerMsg);
                // winnerMsg.setAttribute("class",".winnerMssg");
                winnerMsg.classList.add("winnerMssg");
                winnerMsg.innerText="WINNER-WINNER Player " + pos1Val + ", Chicken Dinner !!";
                newGame.classList.add("hide");
                newGame.classList.remove("newGame");
                disableBtn();
                return true;
            }
        }
    } 
    return false;
}

const gameDraw=()=>{
    
    if (checkWinner()===false){
        winnerMsg.classList.add("winnerMssg");
        winnerMsg.innerText="draw Play Again!!";
        newGame.classList.add("hide");
        newGame.classList.remove("newGame");
    }
}

resetGame.addEventListener("click",resetButn);
newGame.addEventListener("click",resetButn);