const titleInput = document.querySelector('input#title');
const authorInput = document.querySelector('input#author');
const pagesInput = document.querySelector('input#pages');
const readInput = document.querySelector('select#read');
const submitButton = document.querySelector('.submit-button button');

// there may be a way to shorten my code by using querySelectorAll

let books = [];

// when someon submits the form with the inputs that correspond the parameters below
// the constructor needs to run in order to make a new Book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
} // remember that this returns an object

//Book.prototype.readStatus();

// Submit button event listener
submitButton.addEventListener("click", saveInput);

function saveInput() {
  // 1. When a user clicks on the submit button, this function will run and save only valid input fields that have text.
  // 2. Then take the values in the input fields and save them to variables.
  // 3. Run the constructor function.
  // 4. Push the new book to the book array.
  // 5. Clear the input fields of text.

  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.value;

  let newBook = Book(bookTitle, bookAuthor, bookPages, bookRead);

  books.push(newBook);

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';

}


// function that loops through the array and displays each book on the homepage
// might I need to use a standard 'for' loop? the forEach() loop does NOT return a value
// if i have a nodelist, convert it to an array first
function displayArray(booksArray) {
  booksArray.forEach((element) => {
    //create a new card
      //create div with text fields for title, author, pages, and read
      const bookDiv = document.createElement('div').classList.add(`${element}`);
      //can I give it a class or an ID? check if I gave it a class correctly

      //dealing with the first book object here

      const bookTitle = document.createElement('p').classList.add(`${element}`);
      bookTitle.textContent = `Title: ${element.title}`;
      //Create new elements for author, pages, and read and then add text content.

      //append all the new <p> elements to the new div
      //append the new div to a grid with auto columns
      //the styling will be preset in the CSS file

      //add a button element to the card to remove the book from the library
      //add a buttom element to the card to change the books 'read' status
  })
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
