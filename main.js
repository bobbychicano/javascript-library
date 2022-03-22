// There may be a way to shorten my code by using querySelectorAll
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('button');
const books = [];
const booksDisplay = document.querySelector('.books-display');

// Placeholder content: add some books to my array to help with styling

let book1 = {title: 'East of Eden', author: 'John Steinbeck', pages: '521', read: 'have-read'};
let book2 = {title: 'Silas Lapham', author: 'Howard', pages: '439', read: 'have-read'};
books.push(book1, book2)
displayBooks(books);

//end of placeholder content

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Need to a write a function into the Book.prototype to change the read status.
// Book.prototype.readStatus();

// To step it up another notch I'd have to add a button that pops up the form to submit a new book and then exists once the form is submitted. May have to research modal windows.
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

      const bookCard = document.createElement('div')
      bookCard.classList.add('display-item');
      booksDisplay.appendChild(bookCard);

      const cardTitle = document.createElement('p');
      cardTitle.textContent = 'Title: ' + `${element.title}`;
      const cardAuthor = document.createElement('p');
      cardAuthor.textContent = 'Author: ' +  `${element.author}`;
      const cardPages = document.createElement('p');
      cardPages.textContent = 'Pages: ' + `${element.pages}`;
      const cardRead = document.createElement('p');
      cardRead.textContent = 'Read: ' +  `${element.read}`;
      //read, not-read toggle
      const readToggle = document.createElement('input');
      readToggle.type = "checkbox";
      //card remove button
      const cardRemove = document.createElement('button');
      cardRemove.classList.add('remove-button');
      cardRemove.textContent = 'x';

      bookCard.append(cardTitle, cardAuthor, cardPages, cardRead, readToggle, cardRemove);

      //add a buttom element to the card to change the books 'read' status
  })
}

function removeCard() {
  //event listener to know if the button in the card was clicked
  //if so, remove the card
  //will need to learn about data-attributes

  //data-attribute = index of array
}

function updateReadStatus() {

}

// is there a function i can input into the forEach code to create new elements?

// displaying each book in their own card would likely require grid-template-columns with repeat(autofit,
// minmax())
