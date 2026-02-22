let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");

let turnPlayerX= true;
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
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("You Clicked");
        if (turnPlayerX === true) {
            box.innerText= "X";
            turnPlayerX=false;
        }
        else {
            box.innerText="O";
            turnPlayerX=true;
        }
        box.disabled =true; 

        checkWinner();
    });
});

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
            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);