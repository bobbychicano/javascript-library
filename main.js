// There may be a way to shorten my code by using querySelectorAll
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('button');
const books = [];
const booksDisplay = document.querySelector('.books-display');

// add some books to my array to help with styling

let book1 = {title: 'East of Eden', author: 'John Steinbeck', pages: '521', read: 'have-read'};
let book2 = {title: 'Silas Lapham', author: 'Howard', pages: '439', read: 'have-read'};
books.push(book1, book2)
displayBooks(books);

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Need to a write a function into the Book.prototype to change the read status.
// Book.prototype.readStatus();

// Don't know if there is anything else I need to do here to ensure the value and the clearing of the form are solid. To step it up another notch I have to add a button that pops up the form to submit a new book and then exists once the form is submitted. May have to research modal windows.
function saveInput() {

  if (!titleInput.checkValidity() || !authorInput.checkValidity() || !pagesInput.checkValidity() || !readInput.checkValidity()) {
    alert('Invalid input detected. Please try again.');
    return;
  }
  // Explore options for a more concise if statement instead of writing out each input field variable

  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.value;

  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  books.push(newBook);
  console.log(books);
  displayBooks(books);

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';
}

// Submit button event listener
submitButton.addEventListener("click", saveInput);
// Add another event listener here to show the book display?  Or just the function and then call that function after you push the newBook into the books array.


// function that loops through the array and displays each book on the homepage
// might I need to use a standard 'for' loop? the forEach() loop does NOT return a value

function displayBooks(booksArray) {
  booksArray.forEach((element) => {
    //create a new card
      //create div with text fields for title, author, pages, and read
      console.log(element)

      const bookCard = document.createElement('div')
      booksDisplay.appendChild(bookCard);
      //.classList.add(`booksArray[0]-booksArray.indexOf(element)`);

      const cardTitle = document.createElement('p');
      cardTitle.textContent = 'Title: ' + `${element.title}`;
      const cardAuthor = document.createElement('p');
      cardAuthor.textContent = 'Author: ' +  `${element.author}`;
      const cardPages = document.createElement('p');
      cardPages.textContent = 'Pages: ' + `${element.pages}`;
      const cardRead = document.createElement('p');
      cardRead.textContent = 'Read: ' +  `${element.read}`;

      bookCard.append(cardTitle, cardAuthor, cardPages, cardRead);

      //did I use append right?

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
