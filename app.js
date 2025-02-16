let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let turnO = true;
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.classList.add("o");
            box.classList.remove("x");
            turnO=false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x");
            box.classList.remove("o");
            turnO=true; 
        }
        count++;
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]); 
        // console.log(
        //     boxes[pattern[0]],
        //     boxes[pattern[1]],
        //     boxes[pattern[2]]
        // );
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="" && count!=9){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
        else if(pos1Val!="" && pos2Val!="" && pos3Val!="" && count===9){
            msg.innerText = "Match Is Draw";
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);