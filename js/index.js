let formBuscador = document.querySelector ("header form")
let campoBuscador = document.querySelector (".buscador")
let resultadosBusquedas = document.querySelector (".busquedas")

formBuscador.addEventListener ("submit", function(e){
    e.preventDefault ()
    if (campoBuscador.value == "") {  
      resultadosBusquedas.innerText = "El campo de busqueda no puede estar vacio"
    } else if (campoBuscador.value.length < 3) {
        resultadosBusquedas.innerText = "Tienes que escribir al menos tres caracteres"
    } else {
        this.submit()
    }
})

let listaCategorias = document.querySelector (".lista-categorias")
fetch("https://dummyjson.com/products/category-list")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            listaCategorias.innerHTML += `<li class="categorias"><a href="./categoria.html?categoria=${data[i]}">${data[i]}</a></li>`
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error)
    })

let listaSports = document.querySelector (".lista-sports")
let listaKitchen = document.querySelector (".lista-kitchen")
fetch ("https://dummyjson.com/products/category/sports-accessories")
    .then(function(response) {
        return response.json()
    })
    .catch(function(error){
        console.log("El error es: "+ error)
    })