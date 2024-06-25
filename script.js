var logform =document.getElementById("log")
    logform.addEventListener("submit",function(event){
        event.preventDefault()

        var studId = document.getElementById("studentId").value;
        var email = document.getElementById("email").value;

        var bookingSystemLoginVal ={"studentID":studId,"email":email}

        localStorage.setItem('loginFormvalsForBookingSystem' , JSON.stringify(bookingSystemLoginVal))

    window.location.href ='searchPage.htm'
})


//for book catalogue searchs system
/*in the previous system the results popped up in li tags and were fillered using the .contains() function
so in this current one their will be about 6 to 12 defualt boxes
*/
//jus create a template and gernate it with every search