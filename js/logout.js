let botonLogout = document.querySelector(".logout")

botonLogout.addEventListener("click", function(e) {
    e.preventDefault()
    localStorage.removeItem("mailUsuario")
})