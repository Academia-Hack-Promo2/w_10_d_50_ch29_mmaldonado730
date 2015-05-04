$(document).ready(function(){
    $("#bti").click(function(){
        $("#portada").fadeOut("slow");
    });
});

$(document).ready(function(){
  $( document ).click(function() {
    $( "#ninja" ).show('slide', {direction: 'right'}, 1000);
  });
});


function ANinja() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("p1").innerHTML = text;
}

function ADinosaurio() {
    var x = document.getElementById("frm2");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("p2").innerHTML = text;
}

