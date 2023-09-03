let gameseq =[];
let userseq =[];
let btns =["yellow","red","purple","green"];
let max = 0
let started = false;
let level =0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let start_game = document.getElementById("start_game");
start_game.addEventListener("click", function(){
    if(started == false){
        
        started = true;
        levelup();
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;
    
    let randomidx = Math.floor(Math.random()*3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`#${randomcolor}`);
    gameseq.push(randomcolor);
    Flash(randombtn);
}

function Flash(btn){
    btn.classList.add("aliceblue");
    setTimeout(function(){
        btn.classList.remove("aliceblue")
    } ,250)
}
function checkAns(idx){
if(userseq[idx] == gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup , 500);
    }
}
else{
    let over = document.querySelector("body");
    over.style.backgroundColor = "red";
    setTimeout(function(){
        over.style.backgroundColor = "black";  
    } , 1000);
    h2.innerText =`Game is over! Your score was ${level} Press START to Start Again`;
    max= Math.max(max , level);
    h3.innerText = `High Score : ${max}`;
    
    reset();
}
}
function btnPress(){
    console.log(this);
    let btn = this;
    Flash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnPress);
}
function reset(){
    gameseq =[];
    userseq = [];
    level=0;
    started =false;
}

