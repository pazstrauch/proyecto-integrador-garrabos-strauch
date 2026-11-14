
let contenedor = document.querySelector(".todos-productos");

fetch("https://dummyjson.com/products/category/beauty")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            contenedor.innerHTML += `
                <article class="producto-individual">
                    <h3>${productos[i].title}</h3>
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <p>Precio: $${productos[i].price}</p>
                </article>
            `;
        }
    });
