let book= {
    name: 'Java',
    author: 'Jaba',
    publishingHouse: 'Jupiter',
    pages: 300,
    price: 1500,
    stock: false,
    getInfo() {
        return `Книга ${this.name}. Автор:${this.author}. От издательства${this.publishingHouse}. Количество страниц${this.pages}. Цена ${this.price}`
    },
    book_shop:{
        name: 'fayida',
        adress: 'Grozny',
        thanks(){
            return `Вас приветствует магазин ${this.name}.Мы находимся по адресу ${this.adress}`
        }
    }

}
//console.log(book.name) - обратились к свойству объекта book

//console.log(book.book_shop) - обратились к свойству объекта book,который является объектом

//console.log(book.book_shop.name) - обратились к свойству name ,объекта book_shop,который является свойством объекта  book

//console.log(book.book_shop.thanks())- мы обратились к медоту ,объекта book_shop,который является объектом book

