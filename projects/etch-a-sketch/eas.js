const container=document.querySelector('#container');

function makeGrid(c,r){
   // container.style.display='grid';
    
    
    for (let i = 0; i < (c*r); i++) {
        const content=document.createElement('div');
        container.style.gridTemplateColumns=`repeat(${c}, 1fr)`;
        container.style.gridTemplateRows=`repeat(${r}, 1fr)`;
        content.classList.add('cell');
        
        container.appendChild(content);  


        
        
    }


        const cells=document.querySelectorAll('.cell');

        cells.forEach(cell => {
            cell.style.backgroundColor='pink';
            cell.addEventListener('mouseout',()=>{
                cell.setAttribute('style','background-color:violet');
             })
        });

}





makeGrid(16,16);









const button=document.querySelector('#bb');
button.addEventListener('click', () =>{
    let valg=prompt('angi tall:');
    makeGrid(valg,valg);


});


