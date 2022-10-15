
$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});     
var getParentAnchor = function (element) {
    while (element !== null) {
      if (element.tagName && element.tagName.toUpperCase() === "A") {
        return element;
      }
      element = element.parentNode;
    }
    return null;
  };

const M = document.querySelector ('.modal');

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', () => {
    M.modal('show');
  //('#largeModal').modal('show');
  }));