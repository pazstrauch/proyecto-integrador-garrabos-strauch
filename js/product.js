let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let idProducto = queryStringObj.get("id")

let fotoProducto = document.querySelector(".foto-producto")
let nombreProducto = document.querySelector(".nombre-producto")
let marcaProducto = document.querySelector(".marca-producto")
let descripcionDetalle = document.querySelector(".descripcion-detalle")
let precioDetalle = document.querySelector(".precio-detalle")
let categoriaProducto = document.querySelector(".categoria-producto")
let stockProducto = document.querySelector(".stock-producto")
let tagsProductos = document.querySelector (".tags-producto")

let listaReviews = document.querySelector(".reviews")

fetch (`https://dummyjson.com/products/${idProducto}`)
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        nombreProducto.innerText = data.title
        descripcionDetalle.innerText = data.description
        precioDetalle.innerText = `$${data.price}`
        stockProducto.innerText = `Stock: ${data.stock} unidades`
        marcaProducto.innerText = `Marca: ${data.brand}`
        fotoProducto.innerHTML =  `<img src="${data.thumbnail}" alt="${data.title}" class="img-producto-detalle">`
        categoriaProducto.innerHTML = `Categoría: <a href="./categoria.html?categoria=${data.category}" class="link-cada-producto">${data.category}</a>`
        tagsProductos.innerText = `Tags: ${data.tags}`

        for (let i = 0; i < data.reviews.length; i++){
            listaReviews.innerHTML += `
                <div class="review-individual">
                    <p>${data.reviews[i].reviewerName}</p>
                    <p class="descripcion-producto">Rating: ${data.reviews[i].rating}/5</p>
                    <p class="descripcion-producto">${data.reviews[i].date}</p>
                    <p class="descripcion-producto">${data.reviews[i].comment}</p>
                </div>`
        }
    })
    .catch (function(error){
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