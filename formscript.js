    var studId,email,Fname,valsFromLoginForm ,btc ,bct ,bookName;

    Fname = document.getElementById("name")
    studId = document.getElementById("studentId");
    email = document.getElementById("email")
    btc = document.getElementById("btc")
    bct = document.getElementById("bct")
    bookName = document.getElementById("bookname")

document.addEventListener("DOMContentLoaded",function(){ //LOADS INFO FROM LOGIN PAGE HERE,HENCE I WONT NEED MORE FORM VALIDATION SINCE IT WAS ALREADY VALIDATED ON THE LOGIN PAGE
    var bookTITLE = JSON.parse(localStorage.getItem("booktitle"))
    valsFromLoginForm = JSON.parse(localStorage.getItem("loginFormvalsForBookingSystem"))
    console.log(valsFromLoginForm)    
    console.log(bookTITLE.title);
    console.log(valsFromLoginForm.studentID)

    document.getElementById("title").innerHTML = bookTITLE.title +" is abavailible"

    studId.value=valsFromLoginForm.studentID

    email.value = valsFromLoginForm.email
    bookName.value = bookTITLE.title
    document.getElementById("formH").innerHTML = "Application form for "+bookTITLE.title 

})

function autofiller(){
    var prtname, prtstudentID, prtemail , prtcampus , prtrentdate ,prtreturndate;
    prtname = document.getElementById("prtname")
    prtstudentID = document.getElementById("prtStudentId")
    prtemail = document.getElementById("prtEmail")
    prtcampus = document.getElementById("prtcampus")
    prtrentdate = document.getElementById("prtRentDate")
    prtreturndate = document.getElementById("prtReturnDate")

    prtname.innerHTML ="Name : " +Fname.value;
    prtstudentID.innerHTML = "Student ID : " + studId.value;
    prtemail.innerHTML = "Email : " + email.value;

    if (btc.checked) {
        console.log("btc")
        prtcampus.innerHTML = "Campus : btc";
    } else if (bct.checked) {
        console.log("bct")
        prtcampus.innerHTML = "Campus : bct";
    }
}


var rentdate,returndate;

rentdate = document.getElementById("rentDate")
returndate= document.getElementById("rentReturndate")

//math for dates

//footer to appear at bottom
function getBodyHeight() {
    let body = document.body, html = document.documentElement;
    return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

  document.getElementById("foot").style.top = (getBodyHeight()/5)+"px";
