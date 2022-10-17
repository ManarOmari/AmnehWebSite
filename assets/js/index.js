let conceptName = $('#foo').find(":selected").val();

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
  function redirect(goto){
    var conf = confirm("Are you sure you want to go elswhere?");
    if (conf && goto != '') {
        window.location = goto;
    }
}

document.getElementById("foo").onchange = function() {
conceptName = $('#foo').find(":selected").val();
if (conceptName === 'english'){
  window.location = ('/index-en.html');
}
else if (conceptName === 'arabic') {
  window.location = ('/index.html');
}
};
