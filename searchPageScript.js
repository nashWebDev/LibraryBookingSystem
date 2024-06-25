//search bar

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
//muti page display
var pagecount = booksArray.length/10;
var booksperPage = 20;
var currentpage = 1;
console.log(pagecount)



function listArray(txtValue){
    var p = document.createElement("p");
    p.innerHTML = txtValue;
    var catalogueBox = document.getElementById("catalogue");

    var fdiv = document.createElement("div");
    var div = document.createElement("div");
    var a = document.createElement("a")

    a.classList.add("bookbox");
    div.classList.add("imgContainer");
    a.href = "form.htm"

    div.appendChild(p);
    a.appendChild(div);
    catalogueBox.appendChild(a);

    a.addEventListener("click" , function(event){
        event.preventDefault()
        var bookTitle = p.innerHTML;
        var bookingSystemTitles={"title":bookTitle}
        console.log(bookingSystemTitles)
        localStorage.setItem("booktitle",JSON.stringify(bookingSystemTitles))
        window.location= "form.htm"
    })

}


//makes a few books appear for ui purposes
document.addEventListener("DOMContentLoaded",function(){

    for (var i = 0; i < 10; i++) {
        txtValue = booksArray[i];
        listArray(txtValue)
    }

})

function fullsearch() {
    var catalogueBox = document.getElementById("catalogue");
    catalogueBox.innerHTML = ""; // Clear the catalogue content
    search();
}

function search() {

    var myInput = document.getElementById("myInput");
    var filter = myInput.value.toUpperCase(); // Convert search input to uppercase for case-insensitive comparison
    var catalogueBox = document.getElementById("catalogue");
    catalogueBox.innerHTML = ""; // Clear the catalogue content
    var maxResults = 0


    var txtValue;

    for (var i = 0; i < booksArray.length; i++) {
        txtValue = booksArray[i];

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
           listArray(txtValue)
           maxResults++
        }

        if(maxResults === 20){
            break
        }

    }
}




//footer to appear at bottom
// function getBodyHeight() {
//     let body = document.body, html = document.documentElement;
//     return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
//   }

//   document.getElementById("foot").style.top = (getBodyHeight()/5)+"px";

//add the animation later on fromt this website
//https://tesseract.projectnaptha.com/

// Create a canvas element to hold the WebGL renderer
// var canvasContainer = document.getElementById("canvas"); // Assuming you have a container element with id "canvas"
// var rendererCanvas = document.createElement("canvas");
// rendererCanvas.style.width = "100%";
// rendererCanvas.style.height = "100%";
// canvasContainer.appendChild(rendererCanvas);

// // Setup WebGL renderer with alpha: true for transparency
// const renderer = new THREE.WebGLRenderer({ canvas: rendererCanvas, alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity

// // Create a scene
// const scene = new THREE.Scene();

// // Create a cube with black material and transparent background
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1, wireframe: true });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Setup camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Example: Rotate cube based on mouse movement
// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// animate();

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    let input = document.getElementById("myInput");
    input.disabled = true
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("body1").style.marginLeft = "250px";
    document.getElementById("body1").style.opacity="5"
    document.getElementById("body2").style.marginLeft = "250px";
    document.getElementById("body2").style.opacity="0.5"
    document.getElementById("openbtn").style.display = " none"
    
   
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    let input = document.getElementById("myInput");
    input.disabled = false
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body1").style.marginLeft = "0";
    document.getElementById("body1").style.opacity="1"
    document.getElementById("body2").style.marginLeft = "0";
    document.getElementById("body2").style.opacity="1"

    document.getElementById("openbtn").style.display = " block"
  }

//get total number of books,10 books a page so
//function will surrons eveyr 10 books by a div ,so groups of 10,
//when u press next ,priv div will change to display none,new div will change to block