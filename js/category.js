let contenedor = document.querySelector(".todos-productos");
fetch("https://dummyjson.com/products/category/beauty")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });