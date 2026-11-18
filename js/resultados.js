let tituloResultados = document.querySelector(".titulo-resultados")
let listaResultados = document.querySelector (".lista-resultados")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let terminoBuscado = queryStringObj.get("buscador")

fetch(`https://dummyjson.com/products/search?q=${terminoBuscado}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        if (data.products.length == 0) {
            tituloResultados.innerText = `No hay resultados para el término: ${terminoBuscado}`
        } else {
            tituloResultados.innerText = `Resultados de búsqueda para: ${terminoBuscado}`
            for (let i = 0; i < data.products.length; i++) {
                listaResultados.innerHTML += `
                    <article class="producto-individual">
                        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                        <h3 class="titulo-producto">${data.products[i].title}</h3>
                        <p class="descripcion-producto">${data.products[i].description}</p>
                        <p class="precio-producto">$${data.products[i].price}</p>
                        <a href="./product.html?id=${data.products[i].id}" class="botondetalle">Ver detalle</a>
                    </article>`
            }
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error)
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