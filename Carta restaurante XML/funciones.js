$.get("nota.xml",function(data){

    hd=$(data).find("heading").text();

    $("h1").html(hd);

});

$.get("menu.xml",function(data){
    var cargarMenu = "";
    var numImagen = 1;

    $(data).find("food").each(function(){

        var nombre = $(this).find("name").text();
        var precio = $(this).find("price").text();
        var descripcion = $(this).find("description").text();
        var calorias = $(this).find("calories").text();

        cargarMenu += "<div class='card mb-3' style='max-width: 540px;'>" +
        "<div class='row g-0'>" +
        "<div class='col-md-4'>" +
        "<img src='imagen-" + numImagen + ".jpg' class='img-fluid rounded-start' >" +
        "</div>" +
        "<div class='col-md-8'>"+
        "<div class='card-body'"+
        "<p class='font-weight-bold' id='plato'>" + nombre + "</p>" +
        "<p id='descripcion'>" + descripcion + "</p>" +
        "<p id='precio'>" + precio + "</p>" +
        "<p id='calorias'>" + calorias + "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

        numImagen++;

        

    });

    $("#menu-list").html(cargarMenu);


});

