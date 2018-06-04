window.onscroll = function() {stickyHeader()};

var header = document.getElementById("banner");

// Get the offset position of the banner
var headerOffset = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset >= headerOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  //console.log(header.classList);
}