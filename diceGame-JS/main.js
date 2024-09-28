
let rollBtn = document.querySelector(".roll-btn");
let newBtn = document.querySelector(".new-btn");
let holdBtn = document.querySelector(".hold-btn");
let img = document.querySelector("img");
let currentSpan1 = document.querySelector(".current-1");
let currentSpan2 = document.querySelector(".current-2");
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");
let scoreSpan1 = document.querySelector(".score-1");
let scoreSpan2 = document.querySelector(".score-2");



//inital  state
 currentSpan1.textContent  = 0 ;
 currentSpan2.textContent = 0 ; 
 scoreSpan1.textContent = 0 ; 
 scoreSpan2.textContent = 0 ; 
let current1 = 0   ,  current2 = 0  , score1 = 0 , score2 = 0 ;
let active = 1 ;  
let stop =0 ; 

 

rollBtn.addEventListener('click',()=>{
         if(stop!=1){
    //generate random number 
    let dice =Number.parseInt(Math.random()*6 )+1;

    //display picture 
    img.src =`images/dice-${dice}.png`;
    img.style.display ="inline";

    //for test 
    console.log(dice);
    console.log(img); 
    
    //check if number == 1 or not 
    if(dice ==1){

          if(active == 1){
            currentSpan1.textContent = 0; 
            current1= 0 ; 
            active= 2 ; 
            player1.classList.remove("active");
            player2.classList.add("active");
        }
        else{
            currentSpan2.textContent= 0 ; 
            current2 = 0 ; 
            active = 1; 
            player1.classList.toggle("active");
            player2.classList.toggle("active");
        }
    }
    else{
                 
            if(active == 1){
                current1+=dice ; 
                currentSpan1.textContent = current1; 
            }
            else{
                current2+=dice; 
                currentSpan2.textContent= current2 ; 
            }

    }
}
})



   holdBtn.addEventListener('click', ()=>{
    if(stop !=1){
    if (active ==1 ){
        score1+=current1 ; 
        scoreSpan1.textContent = score1 ; 
        active = 2 ; 
        current1=0 ; 
        currentSpan1.textContent =0 ; 
        if(score1>=100 ){
            stop=1; 
            console.log(stop)
            img.style.display = "none" ; 
            player1.classList.add("winner");
        }
        else{
        player1.classList.toggle("active");
        player2.classList.toggle("active");
        }
       
    }
    else{
        score2+=current2 ; 
        scoreSpan2.textContent = score2 ; 
        active = 1 ; 
        current2=0; 
        currentSpan2.textContent = 0 ; 
        if(score2>=100 ){
            stop=1;
            img.style.display = "none" ;
            player2.classList.add("winner");
        }
        else{
        player1.classList.toggle("active");
        player2.classList.toggle("active");
        }
    }

    }
});
 

newBtn.addEventListener('click' , ()=>{
    currentSpan1.textContent  = 0 ;
    currentSpan2.textContent = 0 ; 
    scoreSpan1.textContent = 0 ; 
    scoreSpan2.textContent = 0 ; 
    current1 = 0   ,  current2 = 0  , score1 = 0 , score2 = 0 ;
    active = 1 ;  
    stop =0 ; 
    player1.classList.add("active");
    player2.classList.remove("active");
    player1.classList.remove("winner");
    player2.classList.remove("winner");
}); 