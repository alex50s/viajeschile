//navegador//
$(document).scroll(function () {
    const y = $("html").scrollTop();

    y > 500 ?
        $("nav").addClass("nav-black")
        :
        $("nav").removeClass("nav-black");
})

//contactos//
$("#enviar").click(function () {
    alert("¡Gracias por escribir! Todo fue enviado correctamente.");
});

//footer - tooltip//
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
})

