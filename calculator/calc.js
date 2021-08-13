let display=document.querySelector('.display');
display.textContent='0';
let tot='';
let nClicks=0; //HVIS MAN CLICKER MER ENN 6 GANGER FÅR MAN ERROR (slik at allle tall vises i displayet)
let a;
let b;
let check=0;//sjekker om a er valgt allerede.
let activeFunc;

const zero=document.querySelector('.zero');
zero.addEventListener('click', () =>{
    
    if (nClicks<6 && nClicks>0) {//SLIK AT 0 IKKE ER DET FØRSTE TALLET
        tot+='0';//legger til tallet på slutten av strengen som allerede er der
        display.textContent=tot;//viser hele tallet
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

    

});


const one=document.querySelector('.one');
one.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='1';
        display.textContent=tot;
        nClicks++;
        
        
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});


const two=document.querySelector('.two');
two.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='2';
        display.textContent=tot;
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});


const three=document.querySelector('.three');
three.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='3';
        display.textContent=tot;
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});


const four=document.querySelector('.four');
four.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='4';
        display.textContent=tot;
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});


const five=document.querySelector('.five');
five.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='5';
        display.textContent=tot;
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});

const six=document.querySelector('.six');
six.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='6';
        display.textContent=tot;
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});

const seven=document.querySelector('.seven');
seven.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='7';
        display.textContent=tot;
        nClicks++;
    }
    
    
    if (check==1) {
        a=parseInt(tot);
        
    }
    else{
        b=parseInt(tot);
    }

});


const eight=document.querySelector('.eight');
eight.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='8';
        display.textContent=tot;
        nClicks++;
    }
    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});

const nine=document.querySelector('.nine');
nine.addEventListener('click', () =>{
    
    if (nClicks<6) {
        tot+='9';
        display.textContent=tot;
        nClicks++;
    }

    if (check==1) {
        a=parseInt(tot);
    }
    else{
        b=parseInt(tot);
    }

});

const c=document.querySelector('.c');
c.addEventListener('click', () =>{
        
    display.textContent='0';
    nClicks=0;
    tot='';
        
});


const plus=document.querySelector('.plus');
plus.addEventListener('click', () =>{
    
    check=1;
    tot='';
    display.textContent=tot;
    nClicks=0;
    activeFunc=add;
     
});

const minus=document.querySelector('.minus');
minus.addEventListener('click', () =>{
    
    check=1;
    tot='';
    display.textContent=tot;
    nClicks=0;
    activeFunc=subtract;
     
});


const product=document.querySelector('.product');
product.addEventListener('click', () =>{
    
    check=1;
    tot='';
    display.textContent=tot;
    nClicks=0;
    activeFunc=multiply;
     
});


const divi=document.querySelector('.divide');
divi.addEventListener('click', () =>{
    
    check=1;
    tot='';
    display.textContent=tot;
    nClicks=0;
    activeFunc=divide;
     
});



const equals=document.querySelector('.equals');
equals.addEventListener('click', () =>{

  
    
    display.textContent=operator(activeFunc,a,b);
    
    a=null;
    b=null;
    tot='';
    check=0;
    

        
});

function add(a,b){
    return parseFloat(a)+parseFloat(b);
}


function subtract(a,b) {
    
    return b-a;
}



function multiply(a,b) {
    return a*b;
}


function divide(a,b) {
    return b/a;
}



function operator(func, a, b) {
    return func(a,b);
}

