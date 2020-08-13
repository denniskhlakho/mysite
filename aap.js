window.onscroll = function() {myFunction()};

var navbar = document.getElementById("bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function my() {
  alert(" --Notice---\nPage Is Loaded!! Coming Soon");
}