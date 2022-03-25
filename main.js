"use strict";

// There may be a way to shorten my code by using querySelectorAll
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('button');
let books = [];
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
// run another function, one that sets data-attributes?
// target each available display card and give it a data-attribute
//querySelectAll of them, loop through them, and give them a data-attribute and the value would start at 0 and climb up to 1 less of the books.length

//then we would run this function again everytime the remove button is clicked to reassign index numbers to the card elements

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';

}

// Submit button event listener
submitButton.addEventListener("click", saveInput);

// Display books function
function displayBooks(booksArray) {

  booksArray.forEach((element) => {

    //for each element in the array, check to see if it has been "drawn" (given a div element and children under) already, and if it has, skip it, if it hasn't, then create a new div and append children elements with information about the element(object).

    if (!!document.querySelector(`[data-card-number='${booksArray.indexOf(element)}']`)) {
      return
    } else {

      //can I make the creation of all these elements a function in itself?
      const bookCard = document.createElement('div')
      bookCard.setAttribute('id', 'display-item');
      bookCard.setAttribute('data-card-number', `${booksArray.indexOf(element)}`);
      //can i make data attributes dynamic so that the number changes when the index number in the array changes? like when an element gets removed and all the element index numbers shift.
      booksDisplay.appendChild(bookCard);

      const cardTitle = document.createElement('p');
      cardTitle.textContent = 'Title: ' + `${element.title}`;
      const cardAuthor = document.createElement('p');
      cardAuthor.textContent = 'Author: ' +  `${element.author}`;
      const cardPages = document.createElement('p');
      cardPages.textContent = 'Pages: ' + `${element.pages}`;
      const cardRead = document.createElement('p');
      cardRead.textContent = 'Read: ' +  `${element.read}`;
      //the toggle for read, not-read
      const readToggle = document.createElement('label');
        readToggle.classList.add('switch');
      const toggleInput = document.createElement('input');
        toggleInput.type = "checkbox";
      const toggleSlider = document.createElement('span');
        toggleSlider.classList.add('slider');
      readToggle.append(toggleInput, toggleSlider);
      //card remove button
      const cardRemove = document.createElement('button');
      cardRemove.classList.add('remove-button');
      cardRemove.textContent = 'X';
      //testing if each button gets an event listener correctly
      cardRemove.addEventListener('click', removeCard);

      bookCard.append(cardTitle, cardAuthor, cardPages, cardRead, readToggle, cardRemove);

    }
  })
}

// Function to remove a card from the books array, thereby removing it from the display
function removeCard(e) {

  let cardNumber = e.target.parentElement.getAttribute('data-card-number');
  let deleteCard = document.querySelector(`[data-card-number='${cardNumber}']`);

  // books = books.filter(element => books.indexOf(element) != cardNumber);

  // definitely feels like a hack but it gets my code to work and there isn't enough guidance on how to complete this project. It's great that I've had to struggle and learned a lot by it, but it's not sustainable to constantly have projects that stop progress dead in its tracks. I need a job and I need to finish this course so that I am at least familiar with things. Once I'm getting paid by the hour I wont mind having to spend time figuring something out. That's my one critique of TOP. Some of the projects need more guidance so that people can complete them in a timely manner and also pick up hints that developers only know becasue of years of experience.
  delete books[cardNumber];

  //books.splice(cardNumber, 1);

  console.log(books);

  deleteCard.remove();

  // .splice isnt removing the last element for some reason

  //have to make a new book booksArray?
  //everytime i remove an element from the array, the index numbers change
}

function updateReadStatus() {

}

// is there a function i can input into the forEach code to create new elements?

// displaying each book in their own card would likely require grid-template-columns with repeat(autofit,
// minmax())

// now i need to select the toggle checkbox in the global scope so that I can attach an event listener to checkbox

// const readToggle = document.querySelector();
// readToggle.addEventListener('click', updateReadStatus);
//is this supposed to be a click event or is there a more specific even for when a checkbox is clicked?
