let formularioRegistro = document.querySelector(".form-register")
let repeticionPassword = document.querySelector(".repeticion-password")
let campoPassword = document.querySelector(".password-register")
let campoMail = document.querySelector(".mail-register")
let terminos = document.querySelector("#terminos-y-condiciones")
formularioRegistro.addEventListener("submit", function(e) {
    e.preventDefault()
    if(campoMail.value =="" ){
      alert("El correo electronico tiene que estar vacio");
    }  
    else if(campoPassword.value =="") {
        alert("La contraseña no puede estar vacia")
}
else if(campoPassword.value.length < 6) {
    alert("La contraseña tiene que tener al menos 6 caracteres")
}
else if(campoPassword.value != repeticionPassword.value) {
    alert("Las contraseñas son diferentes")
}
else if(terminos.checked == false) {
    alert("Debes aceptar los terminos y condiciones")
}
else {
    location.href = "./login.html"
}
})
