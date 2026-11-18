let formularioRegistro = document.querySelector(".form-register")
let repeticionPassword = document.querySelector(".repeticion-password")
let campoPassword = document.querySelector(".password-register")
let campoMail = document.querySelector(".mail-register")
let terminos = document.querySelector("#terminos-y-condiciones")
let errorRegistro = document.querySelector(".error-register")
formularioRegistro.addEventListener("submit", function(e) {
    e.preventDefault()
    if(campoMail.value =="" ){
     errorRegistro.innerText = "El correo electronico no puede estar vacio";
    }  
    else if(campoPassword.value =="") {
        errorRegistro.innerText = "La contraseña no puede estar vacia"
}
else if(campoPassword.value.length < 6) {
    errorRegistro.innerText = "La contraseña tiene que tener al menos 6 caracteres"
}
else if(campoPassword.value != repeticionPassword.value) {
    errorRegistro.innerText = "Las contraseñas son diferentes"
}
else if(terminos.checked == false) {
    errorRegistro.innerText = "Debes aceptar los terminos y condiciones"
}
else {
    this.submit ();
}
})
let formBuscador = document.querySelector("header form")
let campoBuscador = document.querySelector(".buscador")
let resultadosBusquedas = document.querySelector(".busquedas")

formBuscador.addEventListener("submit", function(e) {
    e.preventDefault()

    if (campoBuscador.value == "") {
        resultadosBusquedas.innerText = "El campo de búsqueda no puede estar vacío"
    } else if (campoBuscador.value.length < 3) {
        resultadosBusquedas.innerText = "Tenés que escribir al menos tres caracteres"
    } else {
        this.submit()
    }
})
