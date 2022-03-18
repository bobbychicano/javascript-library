let books = [];

// when someon submits the form with the inputs that correspond the parameters below
// the constructor needs to run in order to make a new Book object
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function saveInput() {
  // save user input AS AN OBJECT, probably from a form, and add it into the book array
  // the newBookVariable is where we save our new Book object after a user inputs arguments
  books.push(newBookVariable);
}

// function that loops through the array and displays each book on the homepage
function displayArray(booksArray) {
  booksArray.forEach(() => para.textContent = array[index#])
}

// displaying each book in their own card would likely require grid-template-columns with repeat(autofit,
// minmax())

// Book.prototype.function = ""
