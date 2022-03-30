const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('button');
const booksDisplay = document.querySelector('.books-display');
const books = [];

let i = 0;

submitButton.addEventListener("click", saveInput);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function getFormFields() {
  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.value;

  return [bookTitle, bookAuthor, bookPages, bookRead];
}

function clearFormFields() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';
}

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

      const readToggle = document.createElement('label');
        readToggle.classList.add('switch');
      const toggleInput = document.createElement('input');
        toggleInput.type = "checkbox";
        toggleInput.addEventListener('change', updateReadStatus);
      const toggleSlider = document.createElement('span');
        toggleSlider.classList.add('slider');

      readToggle.append(toggleInput, toggleSlider);

      const cardRemove = document.createElement('button');
      cardRemove.classList.add('remove-button');
      cardRemove.textContent = 'X';

      cardRemove.addEventListener('click', removeCard);

      bookCard.append(cardTitle, cardAuthor, cardPages, cardRead, readToggle, cardRemove);

      booksDisplay.appendChild(bookCard);

    }
  });
}

function saveInput() {

  if (!titleInput.checkValidity() || !authorInput.checkValidity() || !pagesInput.checkValidity() || !readInput.checkValidity()) {
    alert('Invalid input detected. Please try again.');
    return;
  }

  getFormFields();

  let [bookTitle, bookAuthor, bookPages, bookRead] = getFormFields();

  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  books.push(newBook);

  newBook["data-card-number"] = i;
  i++;

  displayBooks(books);

  clearFormFields();

}


function removeCard(e) {

  let cardNumber = e.target.parentElement.getAttribute('data-card-number');
  console.log(cardNumber);

  let deleteCard = document.querySelector(`[data-card-number='${cardNumber}']`);

  books = books.filter(element => element["data-card-number"] != cardNumber);

  deleteCard.remove();
}

Book.prototype.toggleRead = function() {

  console.log("I work as a function, but my logic does not.");

  if (this.read == "have-read") {
    this.read = "not-read";
  } else if (this.read == "not-read") {
    this.read = "have-read";
  };
};

function updateReadStatus(e) {

let readStatus = e.target.closest('div').querySelector(':nth-child(4)');

let parentNumber = e.target.closest('div').dataset.cardNumber;

let findBook = books.find( element => element["data-card-number"] == parentNumber);

let bookIndex = books.indexOf(findBook);

books[bookIndex].toggleRead();

readStatus.innerText = "Read: " + books[bookIndex].read;
}
