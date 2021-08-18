let mylibrary=[];
const form=document.querySelector('#myform');
let yn='no';//yes: read book, no: not read



function Book(title, author,pages) {
    this.title=title;
    this.author=author;
    this.pages=pages;

    this.info=function(){
        return title;
    }
}

function show(){
    form.style.display= "block";
    
}

function read() {
    yn='yes';
    
}





const add=document.getElementById('add_btn');
add.addEventListener('click', show);// vi bruker ikke paranteser etter funksjonen fordi vi ikke vil at funksjonen skal bli kalt før vi klikker på knappen

/*
const rb=document.getElementById('has_read');
rb.addEventListener('click', read );

*/





function addBook() {
    
    let title=document.getElementById('title');
    let author=document.getElementById('author');
    let pages=document.getElementById('pages');

    
    let newBook=new Book(title.value, author.value, pages.value);
    
    mylibrary.push(newBook);
    

    
    
    title.value = '';
    author.value = '';
    pages.value ='';


  
    addToTable(newBook.title,newBook.author, newBook.pages,mylibrary.indexOf(newBook));
    form.style.display= "none";
    yn='no';
  //  document.getElementById("has_read").checked = false;//unchecks checkbox after submission


}





function addToTable(title,author,pages,nBook){
    const table=document.querySelector('#table');
    const row=document.createElement('tr');
    const dataTitle=document.createElement('td');   
    const dataAuthor=document.createElement('td');
    const dataPages=document.createElement('td'); 
    const dataRead=document.createElement('td');  
    const dataDelete=document.createElement('td');
    const check=document.createElement('input');
    check.type='checkbox';

    const delButton=document.createElement('button');

    delButton.classList.add('delButton');
    delButton.dataset.indexNumber=nBook;
    


    delButton.addEventListener('click', ()=>{
        table.removeChild(row);

    } );

        



    delButton.textContent='delete';
    dataTitle.textContent=title;
    dataAuthor.textContent=author;
    dataPages.textContent=pages;
   // dataRead.textContent=yn;

    check.addEventListener('click', ()=>{
            dataRead.textContent='yes'
        })


    dataDelete.appendChild(delButton);
    row.appendChild(dataTitle);
    row.appendChild(dataAuthor);
    row.appendChild(dataPages);
    //row.appendChild(dataRead);
    row.appendChild(check);
    row.appendChild(dataDelete);
    
    table.appendChild(row);

}









const addBtn=document.querySelector('#btn');
addBtn.addEventListener('click', addBook);










