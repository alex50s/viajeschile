//navegador//
$(document).scroll(function () {
    const y = $("html").scrollTop();

    y > 500 ?
    $("nav").addClass("nav-black")
    :
    $("nav").removeClass("nav-black");
})

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();

    // click boton enviar
    $("#enviar").click(function () {
        alert("El formulario fue enviado :)");
    });
})

//Contactos//
$("#nombre").click(function () {
    var nombre = prompt("Ingrese su nombre y apellido", "");
    var element = document.getElementById("nombre")
    if (nombre !== "") {
        element.value = nombre
    }
});

$("#asunto").click(function () {
    var tituloasunto = prompt("Ingrese el asunto", "");
    var titulo = document.getElementById("asunto")
    if (tituloasunto !== "") {
        titulo.value = tituloasunto
    }
});


$("#exampleFormControlTextarea1").click(function () {
    var text = prompt("Ingrese  el texto del mensaje", "");
    var element2 = document.getElementById("exampleFormControlTextarea1")
    if (text !== "") {
        element2.value = text
    }
});
