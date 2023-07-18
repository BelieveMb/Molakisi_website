 // le js du modal
 var modal = document.getElementById('id01');

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 };

// style du header pour le burger
function toggleBloc() {
    var bloc = document.getElementById("mon-bloc");
    if (bloc.style.display === "none") {
        bloc.style.display = "block";
    } else {
        bloc.style.display = "none";
    }
}
//le style du collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}