let datourl = new URLSearchParams(location.search);
let categoria = datourl.get("categoria");
let tituloCategoria = document.querySelector(".titulo-categoria");
tituloCategoria.innerText = categoria;
console.log("categoria");
let contenedor = document.querySelector(".todos-productos");
fetch("https://dummyjson.com/products/category/" + categoria)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            contenedor.innerHTML += `
                <article class="producto-individual">
                    <h3 class="titulo-producto">${productos[i].title}</h3>
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <p class= "precio-producto">Precio: $${productos[i].price}</p>
                    <a href ="./product.html?id=${productos[i].id}" class="botondetalle"> Ver detalle </a>
                </article>
            `;
        }
    });
