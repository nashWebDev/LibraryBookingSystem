var booksArray = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "The Catcher in the Rye",
    "The Hobbit",
    "Fahrenheit 451",
    "Moby Dick",
    "The Odyssey",
    "Pride and Prejudice",
    "War and Peace",
    "The Lord of the Rings",
    "Jane Eyre",
    "Brave New World",
    "The Divine Comedy",
    "Crime and Punishment",
    "Wuthering Heights",
    "Great Expectations",
    "Anna Karenina",
    "The Adventures of Huckleberry Finn",
    "Don Quixote",
    "  bok  ",
    "The Brothers Karamazov",
    "Les Misérables",
    "Alice's Adventures in Wonderland",    "Frankenstein",
    "Dracula",   "The Iliad",
    "The Aeneid",
    "The Picture of Dorian Gray",
    "A Tale of Two Cities",
    "Catch-22",
    "One Hundred Years of Solitude",
    "The Grapes of Wrath",
    "Slaughterhouse-Five",
    "The Count of Monte Cristo",
    "Heart of Darkness",
    "The Sound and the Fury",
    "Madame Bovary",
    "Lolita",    "Ulysses",
    "In Search of Lost Time",   "Gone with the Wind",   "The Old Man and the Sea",    "The Metamorphosis",
    "The Stranger",
    "Beloved",
    "The Sun Also Rises",
    "The Trial",
    "The Three Musketeers",
    "The Handmaid's Tale",
    "To the Lighthouse",
    "David Copperfield",
    "Invisible Man",
    "Mansfield Park",
    "The Scarlet Letter",
    "Middlemarch",
    "A Portrait of the Artist as a Young Man",
    "A Clockwork Orange",
    "Rebecca",
    "The Secret Garden",
    "Sense and Sensibility",
    "North and South",
    "Bleak House",
    "Oliver Twist",   "Little Women",
    "Treasure Island",
    "Dr. Jekyll and Mr. Hyde",
    "Robinson Crusoe",    "The War of the Worlds",
    "The Time Machine",
    "The Wind in the Willows",    "The Jungle Book",
    "The Call of the Wild",
    "White Fang",   "The Last of the Mohicans",
    "Gulliver's Travels",   "The Canterbury Tales",
    "The Hunchback of Notre-Dame",
    "Vanity Fair",
    "The Age of Innocence",
    "The Importance of Being Earnest",    "The Turn of the Screw",
    "Lady Chatterley's Lover",   "Persuasion",
    "Emma",
    "Sense and Sensibility",   "Northanger Abbey",
    "The Jungle",
    "The Trial",    "A Room with a View",
    "The Bell Jar",
    "The Prime of Miss Jean Brodie",    "The Remains of the Day",
    "Memoirs of a Geisha",
    "Life of Pi",   "The Road",
    "The Book Thief",    "The Kite Runner",
    "The Girl with the Dragon Tattoo",    "The Da Vinci Code",
    "The Shining",    "It",
    "Carrie",
    "The Stand",    "The Green Mile",
    "Misery",
    "The Dark Tower", "Under the Dome" ,"Introduction to Algorithms", "Artificial Intelligence: A Modern Approach", "Computer Networks",
    "Digital Design and Computer Architecture", "Operating System Concepts", "Database System Concepts",
    "The C Programming Language", "Clean Code: A Handbook of Agile Software Craftsmanship", "Java: The Complete Reference",
    "Python Programming: An Introduction to Computer Science", "Discrete Mathematics and Its Applications",
    "The Art of Electronics", "Engineering Mechanics: Dynamics", "Fundamentals of Thermodynamics", "Electric Circuits",
    "Principles of Communication Systems", "Mechanics of Materials", "Control Systems Engineering", "Signals and Systems",
    "Artificial Neural Networks", "Introduction to Linear Algebra", "Data Structures and Algorithms in Java",
    "Computer Organization and Design", "Modern Control Engineering", "Information Security: Principles and Practice",
    "Principles of Electromagnetics", "Advanced Engineering Mathematics", "Embedded Systems: Introduction to ARM Cortex-M Microcontrollers",
    "Software Engineering: A Practitioner's Approach", "Microelectronic Circuits"
];
const cat = document.getElementById("catalogue");
let collection;
let currentPage = 0;
const booksPerPage = 10;

document.addEventListener("DOMContentLoaded", function() {
    displayBooks(currentPage);
});

function displayBooks(page) {
    cat.innerHTML = ''; // Clear the catalogue container

    const startIndex = page * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    
    for (let i = startIndex; i < endIndex && i < booksArray.length; i++) {
        const bookTitle = booksArray[i];
        const bookContainer = createBookContainer(bookTitle);
        cat.appendChild(bookContainer);
    }

    collection = cat.children; // Update collection after displaying books
    if (collection.length > 0) {
        collection[0].classList.add('active'); // Initialize first container as active
    }
}

function createBookContainer(bookTitle) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookbox");

    const p = document.createElement("p");
    p.innerHTML = bookTitle;

    bookContainer.appendChild(p);

    bookContainer.addEventListener("click", function(event) {
        event.preventDefault();
        const bookingSystemTitles = { "title": bookTitle };
        console.log(bookingSystemTitles);
        localStorage.setItem("booktitle", JSON.stringify(bookingSystemTitles));
        window.location.href = "form.htm";
    });

    return bookContainer;
}

function next() {
    if (currentPage < Math.ceil(booksArray.length / booksPerPage) - 1) {
        currentPage++;
        displayBooks(currentPage);
    }
}

function prev() {
    if (currentPage > 0) {
        currentPage--;
        displayBooks(currentPage);
    }
}


