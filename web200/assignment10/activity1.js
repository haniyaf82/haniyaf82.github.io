// activity1.js
//Haniya Fatima
// Activity1: Create a web page that allows the user to enter book information for a bibliography. Include properties for title, author, year, publisher, city, and state. Respond to one or more user interface events to create an instance of a Book object and then display the book properties in APA format:[2]
//      Last, F. M. (Year) Title. City, State: Publisher.

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //input values
    const authorInput = document.getElementById('author').value.trim();
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value.trim();
    const publisher = document.getElementById('publisher').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();

    //first and last name
    const nameParts = authorInput.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    //Book in object
    const book = {
        title: title,
        author: {
            first: firstName,
            last: lastName
        },
        year: year,
        publisher: publisher,
        city: city,
        state: state
    };

    //Format APA reference
    const apaReference = `${book.author.last}, ${book.author.first.charAt(0)}. (${book.year}) ${book.title}. ${book.city}, ${book.state}: ${book.publisher}.`;

    // Display the results
    document.getElementById('output').textContent = apaReference;
});
