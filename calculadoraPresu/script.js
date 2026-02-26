let ancho = document.getElementById("ancho");
let alto = document.getElementById("alto");
let material = document.getElementById("material");
let preciofinal = document.getElementById("precio-final");
let btncalcular = document.getElementById("calcular");
let btnWhatsApp = document.getElementById("btn-whatsapp");

function calcular() {
    if (ancho.value <= 0 || alto.value <= 0) {
        alert("Error, solo se permiten números positivos");
        return false;
    }
    let resultado = (ancho.value / 100 * alto.value / 100) * material.value;
    preciofinal.innerHTML = resultado.toFixed(2);
    return true;
}

btncalcular.addEventListener("click", calcular);

btnWhatsApp.addEventListener("click", function () {
    if (!calcular()) {
        return;
    }

    let mensaje = "¡Hola ASF Group! He calculado este presupuesto en la web:\n" +
        "- Medidas: Ancho -> " + ancho.value + " | Alto -> " + alto.value + "\n" +
        "- Material: " + material.options[material.selectedIndex].text + "\n" +
        "- Total estimado:" + preciofinal.innerHTML;

    let telefono = CONFIG.TELEFONO_CONTACTO;
    window.open("https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje), '_blank');
})

