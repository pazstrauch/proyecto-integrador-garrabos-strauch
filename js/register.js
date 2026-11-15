let formularioRegistro = document.querySelector(".form-register")
let repeticionPassword = document.querySelector(".repeticion-password")
let campoPassword = document.querySelector(".password-register")
let campoMail = document.querySelector(".mail-register")
formularioRegistro.addEventListener("Submit", function(e) {
    e.preventDefault
    if(campoMail.value =="" )
        alert("El correo electronico tiene que estar vacio")
}

)