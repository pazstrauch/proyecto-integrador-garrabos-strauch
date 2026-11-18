let formularioLogin = document.querySelector(".form-login")
let campoMail = document.querySelector(".mail")
let campoPassword = document.querySelector(".password")
let errorLogin = document.querySelector(".error-login")
formularioLogin.addEventListener("submit", function(e){
    e.preventDefault()
    if (campoMail.value == "") {
    errorLogin.innerText = "El correo electrónico no puede estar vacío"
}
  else if (campoPassword.value == "") {
    errorLogin.innerText = "La contraseña no puede estar vacía"
}
else if (campoPassword.value.length < 6) {
    errorLogin.innerText = "La contraseña debe tener al menos 6 caracteres"
}
else {
    errorLogin.innerText = ""
     localStorage.setItem("mailUsuario", campoMail.value)
    this.submit()
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