const ingreseTexto = document.getElementById("ingreseTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const informacion = document.getElementById("informacion");
const imagen = document.getElementById("imagen");
const derecha = document.getElementById("derecha");


let reemplazar = [

    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],

];

const limpiar = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    ingreseTexto.value = "";
    imagen.classList.add("oculto");
    informacion.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    imagen.classList.remove("oculto");
    informacion.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingreseTexto.focus();
}

function recargar() {
    location.reload();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value;
    const regex = /^[a-z\s]+$/;
            if (!regex.test(texto)) {
                alert("Ingrese solo palabras en minusculas y sin acentos");
                reset();
                mensajeFinal.value = "";
                ingreseTexto.value = "";
                recargar();
            }

    if (texto != "") {
            function encriptar(nuevoTexto) {
                return nuevoTexto.replace(/[aeiou]/g, (match) => {
                    for (let i = 0; i < reemplazar.length; i++) {
                        if (match === reemplazar[i][0]) {
                            return reemplazar[i][1];
                        }
                    }
                });
            }
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }

    limpiar(encriptar(texto));
    mensajeFinal.innerHTML = encriptar(texto);    

});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value;
    const regex = /^[a-z\s]+$/;
            if (!regex.test(texto)) {
            alert("Ingrese solo palabras en minusculas y sin acentos");
            mensajeFinal.value = "";
            ingreseTexto.value = "";
            recargar();
            }

    if (texto != "") {
            function desencriptar(nuevoTexto) {
                return nuevoTexto.replace(/ai|enter|imes|ober|ufat/g, (match) => {
                    for (let i = 0; i < reemplazar.length; i++) {
                        if (match === reemplazar[i][1]) {
                            return reemplazar[i][0];
                         }
                    }
                });
             }
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
    limpiar(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado Exitosamente");
    reset();
})




/* Estas son las palabras que deben sustituir las vocales
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/