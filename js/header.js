let formBuscador = document.querySelector ("header form")
let campoBuscador = document.querySelector (".buscador")

formBuscador.addEventListener ("submit", function(e){
    if (campoBuscador.value == "") {
      e.preventDefault ()  
      alert ("El campo de busqueda no puede estar vacio")
    } else if (campoBuscador.value.length < 3) {
        e.preventDefault ()
        alert ("Tenes que escribir al menos tres caracteres")
    }
})