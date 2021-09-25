
const gameboard=document.querySelector('.gameboard');
let pChoice='X';





const Gameboard= (function(){
    const board_arr= [];


    
    
    
    for (let i = 0; i < 9; i++) {
        const cell=document.createElement('div');
        cell.textContent=null //board_arr[i];
        cell.classList.add('cell', 'cell'+i);

        cell.style.background='pink';
        
        //cell.dataset.clicked==='false';
        board_arr.push(cell);
        
        /*cell.addEventListener('click', ()=>{
            cell.textContent=pChoice;
            //pChoice='O';
        });*/


        gameboard.appendChild(cell);
        
    }


    const cleanUp=() =>{
        board_arr.forEach(cell => {
            cell.textContent='';
        });
    }

    return{
        board_arr,
        cleanUp
    }


    



  




})();

function spill(x) {
    let i=0;
    
    Gameboard.board_arr.forEach(cell => {
       
        cell.addEventListener('click', ()=>{
            
            
            
                
            

                if (i%2==0) {
                    cell.textContent='X';
                    
                    i++;
                   
                    
                    
                    if (winCheck()===1) {
                        alert('game over homes, X won');
                        Gameboard.cleanUp();
                        spill('yo');
                       
                        
                    }
                }
                else{
                    cell.textContent='O';  
                    i++;
                
                
                    if (winCheck()===1) {
                        alert('game over homes, O won');
                        Gameboard.cleanUp();
                        spill('yo');
                        
                        
                    }
                }

                

            

            
            

        }, {once: true} ) // slike at man ikke kan trykke samme sted flere ganger
    });

}





let but=document.querySelector('#yo');
const topLeft=document.querySelector('.cell0');
const topMid=document.querySelector('.cell1');
const topRight=document.querySelector('.cell2');

const midLeft=document.querySelector('.cell3');
const midMid=document.querySelector('.cell4');
const midRight=document.querySelector('.cell5');

const bottomLeft=document.querySelector('.cell6');
const bottomMid=document.querySelector('.cell7');
const bottomRight=document.querySelector('.cell8');



function winCheck(){
    //horisontal
    if ((topLeft.textContent==='O' && topMid.textContent==='O' && topRight.textContent==='O') || (topLeft.textContent==='X' && topMid.textContent==='X' && topRight.textContent==='X') ) {
        return 1;
    }

    else if ((midLeft.textContent==='O' && midMid.textContent==='O' && midRight.textContent==='O') || (midLeft.textContent==='X' && midMid.textContent==='X' && midRight.textContent==='X') ) {
        return 1;
    }

    else if ((bottomLeft.textContent==='O' && bottomMid.textContent==='O' && bottomRight.textContent==='O') || (bottomLeft.textContent==='X' && bottomMid.textContent==='X' && bottomRight.textContent==='X') ) {
        return 1;
    }



    //vertical
    else if ((topLeft.textContent==='O' && midLeft.textContent==='O' && bottomLeft.textContent==='O') || (topLeft.textContent==='X' && midLeft.textContent==='X' && bottomLeft.textContent==='X') ) {
        return 1;
    }

    else if ((topMid.textContent==='O' && midMid.textContent==='O' && bottomMid.textContent==='O') || (topMid.textContent==='X' && midMid.textContent==='X' && bottomMid.textContent==='X') ) {
        return 1;
    }

    else if ((topRight.textContent==='O' && midRight.textContent==='O' && bottomRight.textContent==='O') || (topRight.textContent==='X' && midRight.textContent==='X' && bottomRight.textContent==='X') ) {
        return 1;
    }

    //skrå
    else if ((topLeft.textContent==='O' && midMid.textContent==='O' && bottomRight.textContent==='O') || (topLeft.textContent==='X' && midMid.textContent==='X' && bottomRight.textContent==='X') ) {
        return 1;
    }

    else if ((topRight.textContent==='O' && midMid.textContent==='O' && bottomLeft.textContent==='O') || (topRight.textContent==='X' && midMid.textContent==='X' && bottomLeft.textContent==='X') ) {
        return 1;
    }





}

but.addEventListener('click', ()=>{
    
    if (winCheck()===1) {
        alert('win')
    }
  //  alert(Gameboard.board_arr[2].dataset.clicked)
})



spill('lmzo')
//spill('hh')




const Player=() =>{
 
  
};

const player=Player('x');
const comp=Player('ok');

//player.klikk();










/*
const player=Player();
player.choice();*/