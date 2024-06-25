var bookTITLE = JSON.parse(localStorage.getItem("booktitle"))
    console.log(bookTITLE.title);

var studId,name,valsFromLoginForm;

valsFromLoginForm = JSON.parse(localStorage.getItem("loginFormvalsForBookingSystem"))
console.log(valsFromLoginForm)


document.getElementById("title").innerHTML = bookTITLE.title +" is abavailible"



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

