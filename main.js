
var modal = document.getElementById('popModal');

var bttn = document.getElementById("boton");

var span = document.getElementsByClassName("exit")[0];

bttn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == x ) {
        modal.style.display = "none";
    }
}
