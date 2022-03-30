const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('button');
const booksDisplay = document.querySelector('.books-display');

let books = [];

let i = 2;

submitButton.addEventListener("click", saveInput);


// Placeholder content: add some books to my array to help with styling
let book1 = {
  title: 'East of Eden',
  author: 'John Steinbeck',
  pages: '521',
  read: 'have-read',
  "data-card-number": '0'
};
let book2 = {
  title: 'Silas Lapham',
  author: 'William Dean Howells',
  pages: '439',
  read: 'have-read',
  "data-card-number": '1'
};

books.push(book1, book2);
displayBooks(books);
// End of placeholder content


// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.testProp = "I'm testing if their is prototypal inheritance";

function getFormFields() {
  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.value;

  // Have to return them as an array, cant use 'return' to bring out multiple values
  return [bookTitle, bookAuthor, bookPages, bookRead];
}

function clearFormFields() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';
}

// Function to display the book objects in the books array in <divs> called cards

function displayBooks(booksArray) {
  booksArray.forEach((element) => {

    if (!!document.querySelector(`[data-card-number='${element["data-card-number"]}']`)) {
      return
    } else {

      const bookCard = document.createElement('div')
      bookCard.setAttribute('id', 'display-item');
      bookCard.setAttribute('data-card-number', `${element["data-card-number"]}`);

      const cardTitle = document.createElement('p');
      cardTitle.textContent = 'Title: ' + `${element.title}`;
      const cardAuthor = document.createElement('p');
      cardAuthor.textContent = 'Author: ' +  `${element.author}`;
      const cardPages = document.createElement('p');
      cardPages.textContent = 'Pages: ' + `${element.pages}`;
      const cardRead = document.createElement('p');
      cardRead.textContent = 'Read: ' +  `${element.read}`;

      // Create the toggle checkbox for 'read', 'not-read' status
      const readToggle = document.createElement('label');
        readToggle.classList.add('switch');
      const toggleInput = document.createElement('input');
        toggleInput.type = "checkbox";
        toggleInput.addEventListener('change', updateReadStatus);
      const toggleSlider = document.createElement('span');
        toggleSlider.classList.add('slider');

      readToggle.append(toggleInput, toggleSlider);

      // Create the button to remove a card
      const cardRemove = document.createElement('button');
      cardRemove.classList.add('remove-button');
      cardRemove.textContent = 'X';

      // Give each remove button an event listener
      cardRemove.addEventListener('click', removeCard);

      bookCard.append(cardTitle, cardAuthor, cardPages, cardRead, readToggle, cardRemove);

      booksDisplay.appendChild(bookCard);

    }
  });
}

function saveInput() {

    // Explore options for a more concise if statement instead of writing out each input field variable
  if (!titleInput.checkValidity() || !authorInput.checkValidity() || !pagesInput.checkValidity() || !readInput.checkValidity()) {
    alert('Invalid input detected. Please try again.');
    return;
  }

  getFormFields();

  let [bookTitle, bookAuthor, bookPages, bookRead] = getFormFields();
    //(Destructuring assignment)

  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  books.push(newBook);

  newBook["data-card-number"] = i;
  i++;

  console.log(books);

  displayBooks(books);

  clearFormFields();

}

// Function to remove a card from the books array and the div from the DOM
function removeCard(e) {

  let cardNumber = e.target.parentElement.getAttribute('data-card-number');
  console.log(cardNumber);

  let deleteCard = document.querySelector(`[data-card-number='${cardNumber}']`);

  books = books.filter(element => element["data-card-number"] != cardNumber);

  console.log(books);

  deleteCard.remove();
}

//Adding a method to the Book constructor prototype to toggle the read status on existing book cards
Book.prototype.toggle = function() {

  console.log("I work as a function, but my logic does not.");

  if (this.read == "have-read") {
    this.read = "not-read";

  } else if (this.read == "not-read") {
    this.read = "have-read";

  };
};



// Function to update the 'read' status
function updateReadStatus(e) {

// Selects the 4th paragraph element in the book display div to allow me to change the text content
let readStatus = e.target.closest('div').querySelector(':nth-child(4)');
console.log(readStatus);

// Gets the data-card-number of the div linked to the object with the same value for its property
let parentNumber = e.target.closest('div').dataset.cardNumber;
console.log(parentNumber);

// This finds the actual array element vs the DOM element and returns it
let found = books.find( element => element["data-card-number"] == parentNumber);

// This returns the index # of the array element corresponding to the div where the button was toggled
let gotcha = books.indexOf(found);
console.log(gotcha);

// Now I need to run my method for updating the read status inside my object
console.log(books[gotcha].title); //this works to get the title so I am targeting my object correctly

//console.log(books[gotcha]["testProp"]);

//this is working so my code is right. however, the issue is that my book objects and the Book constructor methods are not linked correctly.
if (books[gotcha].read == "have-read") {
  books[gotcha].read = "not-read";
} else if (books[gotcha].read == "not-read") {
  books[gotcha].read = "have-read";
}

readStatus.innerText = "Read: " + books[gotcha].read;
}
