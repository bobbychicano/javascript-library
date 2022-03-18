
let books = [book 1, book 2, etc];

// when someon submits the form with the inputs that correspond the parameters below
// the constructor needs to run in order to make a new Book object
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readStatus() {
  
};

function saveInput() {
  // save user input AS AN OBJECT, probably from a form, and add it into the book array
  // the newBookVariable is where we save our new Book object after a user inputs arguments
  books.push(newBookVariable);
}

// function that loops through the array and displays each book on the homepage
function displayArray(booksArray) {
  booksArray.forEach((element) => {
    //create a new card
      //create div with text fields for title, author, pages, and read
      const bookDiv = document.createElement(`div[class="${element}"]`);
      //can I give it a class or an ID? check if I gave it a class correctly

      //dealing with the first book object here

      const bookTitle = document.createElement(`p[class="${element}"]`)
      bookTitle.textContent = `Title: ${element.title}`
      //Create new elements for author, pages, and read and then add text content.

      //append all the new <p> elements to the new div
      //append the new div to a grid with auto columns
      //the styling will be preset in the CSS file

      //add a button element to the card to remove the book from the library
      //add a buttom element to the card to change the books 'read' status
  }
}

function removeCard() {
  //event listener to know if the button in the card was toggled
  //if so, remove the card
  //will need to learn about data-attributes
}

function updateReadStatus() {

}

// is there a function i can input into the forEach code to create new elements?

// displaying each book in their own card would likely require grid-template-columns with repeat(autofit,
// minmax())

// Book.prototype.function = ""
