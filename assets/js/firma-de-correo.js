$('#nombre-firma-input').keyup(function(){
    var nombreFirma = document.getElementById("nombre-firma-input").value;
    document.getElementById("nombre-firma").innerHTML = nombreFirma;
})
$('#puesto-input').keyup(function(){
    var nombreFirma = document.getElementById("puesto-input").value;
    document.getElementById("puesto-firma").innerHTML = nombreFirma;
})
$('#telefono-input').keyup(function(){
    var nombreFirma = document.getElementById("telefono-input").value;
    document.getElementById("telefono-firma").innerHTML = nombreFirma;
})
$('#correo-input').keyup(function(){
    var nombreFirma = document.getElementById("correo-input").value;
    document.getElementById("correo-firma").innerHTML = nombreFirma;
})
$('#nombre-empresa-input').keyup(function(){
    var nombreFirma = document.getElementById("nombre-empresa-input").value;
    document.getElementById("nombre-empresa-firma").innerHTML = nombreFirma;
})
$('#pagina-web-input').keyup(function(){
    var nombreFirma = document.getElementById("pagina-web-input").value;
    document.getElementById("pagina-web-firma").innerHTML = nombreFirma;
})
$("#color-1-input").change(function(){
    $("#puesto-firma").css('color', $(this).val());
    $("#telefono-firma").css('color', $(this).val());
    $("#correo-firma").css('color', $(this).val());
});
$("#color-2-input").change(function(){
    $("#element .right-section").css('background', $(this).val());
    $("#nombre-firma").css('color', $(this).val());
    $("#element .mid-section .svg-icon").css('color', $(this).val());
});
$("#facebook-input").change(function() {
    $("#facebook-firma").toggle();
});
$("#twitter-input").change(function() {
    $("#twitter-firma").toggle();
});
$("#instagram-input").change(function() {
    $("#instagram-firma").toggle();
});
$("#linkedin-input").change(function() {
    $("#linkedin-firma").toggle();
});
$("#font-size-input").change(function() {
    var tamanoFuente = document.getElementById("font-size-input").value;
    $("#nombre-firma").css('font-size', (tamanoFuente/50)*1.3 + "rem");
    $("#puesto-firma").css('font-size', tamanoFuente/50 + "rem");
    $("#telefono-firma").css('font-size', tamanoFuente/50 + "rem");
    $("#correo-firma").css('font-size', tamanoFuente/50 + "rem");
    $("#nombre-empresa-firma").css('font-size', (tamanoFuente/50)*1.3 + "rem");
    $("#pagina-web-firma").css('font-size', tamanoFuente/50 + "rem");
});
$("#tipografia-input").change(function () {
    switch ($('#tipografia-input').val()) {
        case "Montserrat":
            $("#nombre-firma").removeClass().addClass('montserrat-font');
            $("#puesto-firma").removeClass().addClass('montserrat-font');
            $("#telefono-firma").removeClass().addClass('montserrat-font');
            $("#correo-firma").removeClass().addClass('montserrat-font');
            $("#nombre-empresa-firma").removeClass().addClass('montserrat-font');
            $("#pagina-web-firma").removeClass().addClass('montserrat-font');
            break;
        case "Roboto":
            $("#nombre-firma").removeClass().addClass('roboto-font');
            $("#puesto-firma").removeClass().addClass('roboto-font');
            $("#telefono-firma").removeClass().addClass('roboto-font');
            $("#correo-firma").removeClass().addClass('roboto-font');
            $("#nombre-empresa-firma").removeClass().addClass('roboto-font');
            $("#pagina-web-firma").removeClass().addClass('roboto-font');
            break;
        case "Open Sans":
            $("#nombre-firma").removeClass().addClass('open-sans-font');
            $("#puesto-firma").removeClass().addClass('open-sans-font');
            $("#telefono-firma").removeClass().addClass('open-sans-font');
            $("#correo-firma").removeClass().addClass('open-sans-font');
            $("#nombre-empresa-firma").removeClass().addClass('open-sans-font');
            $("#pagina-web-firma").removeClass().addClass('open-sans-font');
            break;
        case "Lato":
            $("#nombre-firma").removeClass().addClass('lato-font');
            $("#puesto-firma").removeClass().addClass('lato-font');
            $("#telefono-firma").removeClass().addClass('lato-font');
            $("#correo-firma").removeClass().addClass('lato-font');
            $("#nombre-empresa-firma").removeClass().addClass('lato-font');
            $("#pagina-web-firma").removeClass().addClass('lato-font');
            break;
        case "Oswald":
            $("#nombre-firma").removeClass().addClass('oswald-font');
            $("#puesto-firma").removeClass().addClass('oswald-font');
            $("#telefono-firma").removeClass().addClass('oswald-font');
            $("#correo-firma").removeClass().addClass('oswald-font');
            $("#nombre-empresa-firma").removeClass().addClass('oswald-font');
            $("#pagina-web-firma").removeClass().addClass('oswald-font');
            break;
        case "Raleway":
            $("#nombre-firma").removeClass().addClass('raleway-font');
            $("#puesto-firma").removeClass().addClass('raleway-font');
            $("#telefono-firma").removeClass().addClass('raleway-font');
            $("#correo-firma").removeClass().addClass('raleway-font');
            $("#nombre-empresa-firma").removeClass().addClass('raleway-font');
            $("#pagina-web-firma").removeClass().addClass('raleway-font');
            break;
        case "Merriweather":
            $("#nombre-firma").removeClass().addClass('merriweather-font');
            $("#puesto-firma").removeClass().addClass('merriweather-font');
            $("#telefono-firma").removeClass().addClass('merriweather-font');
            $("#correo-firma").removeClass().addClass('merriweather-font');
            $("#nombre-empresa-firma").removeClass().addClass('merriweather-font');
            $("#pagina-web-firma").removeClass().addClass('merriweather-font');
            break;
        case "Poppins":
            $("#nombre-firma").removeClass().addClass('poppins-font');
            $("#puesto-firma").removeClass().addClass('poppins-font');
            $("#telefono-firma").removeClass().addClass('poppins-font');
            $("#correo-firma").removeClass().addClass('poppins-font');
            $("#nombre-empresa-firma").removeClass().addClass('poppins-font');
            $("#pagina-web-firma").removeClass().addClass('poppins-font');
            break;
        case "Lora":
            $("#nombre-firma").removeClass().addClass('lora-font');
            $("#puesto-firma").removeClass().addClass('lora-font');
            $("#telefono-firma").removeClass().addClass('lora-font');
            $("#correo-firma").removeClass().addClass('lora-font');
            $("#nombre-empresa-firma").removeClass().addClass('lora-font');
            $("#pagina-web-firma").removeClass().addClass('lora-font');
            break;
        case "Mandali":
            $("#nombre-firma").removeClass().addClass('mandali-font');
            $("#puesto-firma").removeClass().addClass('mandali-font');
            $("#telefono-firma").removeClass().addClass('mandali-font');
            $("#correo-firma").removeClass().addClass('mandali-font');
            $("#nombre-empresa-firma").removeClass().addClass('mandali-font');
            $("#pagina-web-firma").removeClass().addClass('mandali-font');
            break;
        default:
            $("#nombre-firma").removeClass().addClass('montserrat-font');
            $("#puesto-firma").removeClass().addClass('montserrat-font');
            $("#telefono-firma").removeClass().addClass('montserrat-font');
            $("#correo-firma").removeClass().addClass('montserrat-font');
            $("#nombre-empresa-firma").removeClass().addClass('montserrat-font');
            $("#pagina-web-firma").removeClass().addClass('montserrat-font');
            break;
    }
});

$('#save-image').click(function(){
    domtoimage.toBlob(document.getElementById('element')).then(function (blob) {
        window.saveAs(blob, 'firma-de-correo.png');
    });
});

$('#image_uploads').change(function(){
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "png" || ext == "jpeg" || ext == "jpg")) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#signature-logo').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        $('#img').attr('src', '/assets/no_preview.png');
    }
});