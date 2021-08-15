function Book(title, author, pages, hasRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.hasRead=hasRead;
    this.info=function(){
        return title + " by "+ author + ", "+ pages+ ", " + hasRead;
    }
}

const inception= new Book('inception', 'nolan', 290, 'not read' )

console.log(inception.info());