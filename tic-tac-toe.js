let O_Text='O';
let X_Text='X';
let current_Player=X_Text;
let count_of_player=0;
const text=document.querySelector('#playText')
const button=document.querySelector('#restartBtn')
const spaces=[null,null,null,null,null,null,null,null,null]
const boxes=document.querySelectorAll('.box');
const restart=()=>{
    let inw=0;
    count_of_player=0
    for(let i of spaces){
        spaces[inw]=null;
        inw+=1
    }
    let o=0;
    for(let i of boxes){
        i.innerText='';
    }
    text.innerText="Let's Play";
    current_Player=X_Text;
}
const game=()=>{for(let i of boxes){
    const j=i.attributes.id.value;
    if(j<3){
        i.style.borderBottom='1px solid #fff'
    }
    if(j%3===0){
        i.style.borderRight='1px solid #fff'
    }
    if(j%3===2){
        i.style.borderLeft='1px solid #fff'
    }
    if(j>5){
        i.style.borderTop='1px solid #fff'
    }
    i.addEventListener('click',task);
}}
const task=(e)=>{
    const idd=e.target.id;
    console.log(count_of_player)
    if(!spaces[idd]){
        if(!playerHasWon()){
            spaces[idd]=current_Player;
            count_of_player+=1;
            e.target.innerText=current_Player;
        }
        if(playerHasWon()){
            text.innerText=`${current_Player} has won!!!`;
            return;
        }
        if(count_of_player===9){
            text.innerText="It's a Draw";
        }
        if(current_Player===X_Text){
            current_Player=O_Text;
        }else{
            current_Player=X_Text;
        }
    }
}
const playerHasWon=()=>{
    if(spaces[0]===current_Player){
        if(spaces[1]===current_Player && spaces[2]===current_Player){
            console.log('win at first row')
            return true
        }
        if(spaces[3]===current_Player && spaces[6]===current_Player){
            console.log('wins at left')
            return true
        }
        if(spaces[4]===current_Player && spaces[8]===current_Player){
            console.log('wins diagonally')
            return true
        }
    }
    if(spaces[8]===current_Player){
        if(spaces[7]===current_Player && spaces[6]===current_Player){
            console.log('win at bottom')
            return true
        }
        if(spaces[2]===current_Player && spaces[5]===current_Player){
            console.log('wins at right')
            return true
        }
        
    }
    if(spaces[4]===current_Player){
        if(spaces[1]===current_Player && spaces[7]===current_Player){
            console.log('win at vertically at middle')
            return true
        }
        if(spaces[3]===current_Player && spaces[5]===current_Player){
            console.log('wins at horizontally middle')
            return true
        }
        if(spaces[2]===current_Player && spaces[6]===current_Player){
            console.log('wins at opposite diagonal')
            return true
        }
    }
}
button.addEventListener('click',restart)
game();