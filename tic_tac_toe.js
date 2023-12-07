let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

// for alternating turn
let turnO = true; 
let count = 0;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

const resetbtn = () =>{
    count = 0
    turnO = true;
    enabledbtn();
}

// to add event listener to all the buttons we can use for each loop
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count += 1;
        if(count == 9){
            draw();
        }
        checkWinner();
    })
});

const disabledboxes = () =>{
    for(box of boxes){
    box.disabled = true;
    }
}

const enabledbtn = () =>{
    for(box of boxes){
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}

const draw = () =>{
    msg.innerText = "Sorry No one is winner, Play again!"
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val!="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newbtn.addEventListener("click",resetbtn)
reset_btn.addEventListener("click",resetbtn);