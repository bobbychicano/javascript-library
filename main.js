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

      bookCard.append(cardTitle, cardAuthor, cardPages, cardRead, readToggle, cardRemove);

    }
  })
}

let removeButton = document.querySelector('.remove-button');

// need to target ALL remove buttons

function removeCard(e) {
  //event listener to know if the button in the card was clicked
  //if so, remove the card

  console.log(e.target);

//remove elements from array books
// Find the index of the array element you want to remove using indexOf, and then remove that index with splice.

//when it runs it needs to look at the data-card-number attribute and rreturnt the number and then plug that in to the splice method

//this would refer to the global object (potential for using this method)

// the function itself has to get the index of the array

//do I need to use e.target so that it know where it was clicked?

//books.splice(index, 1);

  //data-attribute = index of array
  //when the remove button is clicked, it removes the actual object from the array therefore not even being able to display it
  //when the button is pressed it runs a function that exists inside the object prototype to delete it from the array?
  //to delete its own data?
}

 removeButton.addEventListener('click', removeCard);

function updateReadStatus() {

}

// is there a function i can input into the forEach code to create new elements?

// displaying each book in their own card would likely require grid-template-columns with repeat(autofit,
// minmax())

// now i need to select the toggle checkbox in the global scope so that I can attach an event listener to checkbox

// const readToggle = document.querySelector();
// readToggle.addEventListener('click', updateReadStatus);
//is this supposed to be a click event or is there a more specific even for when a checkbox is clicked?
