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
    location.href = "./index.html"
}
})