// activity2.js
//Haniya Fatima
// Extend the program above by adding an APA method to your object that automatically formats the book for display. Use the APA method to format output, replacing the display code above.


document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //getting  form values
    const authorInput = document.getElementById('author').value.trim();
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value.trim();
    const publisher = document.getElementById('publisher').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();

    //first and last name author
    const nameParts = authorInput.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    //book APA method
    const book = {
        title: title,
        authorFirst: firstName,
        authorLast: lastName,
        year: year,
        publisher: publisher,
        city: city,
        state: state,
        apa: function() {
            return this.authorLast + ", " + this.authorFirst.charAt(0) + ". (" +
                   this.year + ") " + this.title + ". " + this.city + ", " +
                   this.state + ": " + this.publisher + ".";
        }
    };

    //displaying formatted results
    document.getElementById('output').textContent = book.apa();
});
