let mailUsuario = localStorage.getItem("mailUsuario")
console.log(mailUsuario)
let saludoUsuario = document.querySelector(".saludo-usuario")
let menuLogin = document.querySelector(".menu-login")
let menuRegistro = document.querySelector(".menu-registro")
let enlaceLogout = document.querySelector(".logout")
if (mailUsuario != null) {
    saludoUsuario.innerText = "Bienvenido: " + mailUsuario
    menuLogin.style.display = "none"
       menuRegistro.style.display = "none"
       enlaceLogout.style.display = "inline"
}
enlaceLogout.style.display = "none"