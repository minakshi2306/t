let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-button");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-button");
let msg= document.querySelector("#msg");

let turnO = true;
const winningptn =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = ()=>{
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO == true){
            box.style.color ="red";
            box.innerText = "O";
            turnO = "false";
            }
            else{
                box.style.color="blue";
                box.innerText= "X";
                turnO= true;
            }
       box.disabled = true;
       
       checkwinner();
    });
    
});

const disableBoxes = () => {
    for ( let box of boxes){
        box.disabled =true;
    }
}
const showWinner =(winner)=>{
   
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const enableBoxes = () => {
    for ( let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
}
const checkwinner = () =>{ 
for(let pattern of winningptn){
    if(boxes[pattern[0]].innerText != "" &&boxes[pattern[1]].innerText != ""&&boxes[pattern[2]].innerText !=""){
    if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText &&boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
    
        console.log("winner is",boxes[pattern[0]].innerText);
        showWinner(boxes[pattern[0]].innerText);

    }}
}};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);






