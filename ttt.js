let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#ms");

let count=0;
let turnPlayerO= true;
let winningPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    turnPlayerO=true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("You Clicked");
        if (turnPlayerO === true) {
            box.innerText= "O";
            turnPlayerO=false;
        }
        else {
            box.innerText="X";
            turnPlayerO=true;
        }
        box.disabled =true; 
        count++;

        let isWinner = checkWinner();
        if ( count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
     
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for (let pattern of winningPattrens) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("We Got the winner!");

                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);