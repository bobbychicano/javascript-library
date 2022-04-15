const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const submitButton = document.querySelector('button');
const booksDisplay = document.querySelector('.books-display');
let books = [];

// Initializer
let i = 0;

// The 'submit' button event listener
submitButton.addEventListener("click", saveInput);

// Factory function to create books
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to save the the value of the inputs in the "Add A Book" form
function getFormFields() {
  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.value;

  return [bookTitle, bookAuthor, bookPages, bookRead];
}

// Function to clear the form input fields
function clearFormFields() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';
}

// Function to display a book on screen after it has been submitted
function displayBooks(booksArray) {
  booksArray.forEach((element) => {

    // If it is possible to target an element with an attribute of 'data-card-number' that equals the
    // array element's data-card-number value, then execute the following code
    if (document.querySelector(`[data-card-number="${element["data-card-number"]}"]`)) {
      return;
    } else {
      const bookDisplayCard = document.createElement('div');
      bookDisplayCard.setAttribute('id', 'display-item');
      bookDisplayCard.setAttribute('data-card-number', `${element["data-card-number"]}`);

      const displayCardTitle = document.createElement('p');
      displayCardTitle.textContent = 'Title: ' + `${element.title}`;
      const displayCardAuthor = document.createElement('p');
      displayCardAuthor.textContent = 'Author: ' +  `${element.author}`;
      const displayCardPages = document.createElement('p');
      displayCardPages.textContent = 'Pages: ' + `${element.pages}`;
      const displayCardRead = document.createElement('p');
      displayCardRead.textContent = 'Read: ' +  `${element.read}`;

      const readToggle = document.createElement('label');
        readToggle.classList.add('switch');
      const toggleInput = document.createElement('input');
        toggleInput.type = "checkbox";
        toggleInput.addEventListener('change', updateReadStatus);
      const toggleSlider = document.createElement('span');
        toggleSlider.classList.add('slider');

      readToggle.append(toggleInput, toggleSlider);

      const removeCardButton = document.createElement('button');
      removeCardButton.classList.add('remove-button');
      removeCardButton.textContent = 'X';

      removeCardButton.addEventListener('click', removeCard);

      bookDisplayCard.append(displayCardTitle, displayCardAuthor, displayCardPages, displayCardRead, readToggle, removeCardButton);

      booksDisplay.append(bookDisplayCard);
    }
  });
}

// Function to save book data when it is submitted
function saveInput() {
  if (!titleInput.checkValidity() || !authorInput.checkValidity() || !pagesInput.checkValidity() || !readInput.checkValidity()) {
    alert('Invalid input detected. Please try again.');
    return;
  }

  getFormFields();

  let [bookTitle, bookAuthor, bookPages, bookRead] = getFormFields();
  let newLibraryBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  newLibraryBook["data-card-number"] = i;
  i++;

  books.push(newLibraryBook);

  displayBooks(books);
  clearFormFields();
}

// Function to remove a book card from the display on-screen
function removeCard(e) {
  let cardNumber = e.target.parentElement.getAttribute('data-card-number');
  let deleteCard = document.querySelector(`[data-card-number='${cardNumber}']`);

  // updates the books array with the result of the new array from filtering out the array element that
  // we want removed
  books = books.filter(element => element["data-card-number"] != cardNumber);

  deleteCard.remove();
}

// Book prototype method to be able to toggle the read status
Book.prototype.toggleRead = function() {
  if (this.read == "have-read") {
    this.read = "not-read";
  } else if (this.read == "not-read") {
    this.read = "have-read";
  }
};

// Function to update the 'read' status
function updateReadStatus(e) {

let readStatus = e.target.closest('div').querySelector(':nth-child(4)');
let parentNumber = e.target.closest('div').dataset.cardNumber;
let findBook = books.find( element => element["data-card-number"] == parentNumber);
let bookIndex = books.indexOf(findBook);

books[bookIndex].toggleRead();

readStatus.innerText = "Read: " + books[bookIndex].read;
}
