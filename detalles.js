

const destacado = JSON.parse(localStorage.getItem("producto"));


const mostrarProducto = document.querySelector("#producto-elegido");
 

destacado.forEach((productos) => 
    {
    let content = document.createElement("div");
    content.innerHTML = `
    <div class"item">
        <figure>
          <img src="${productos.imagen}">
        <figure>
        <div class="info-product">
          <p class="marca">${productos.marca}</p>
          <p class="modelo">${productos.modelo}</>
          <p class="detalle">${productos.detalle}</p>
          <p class="price">${productos.precio}</p>
          <p class="puntos">${productos.puntaje}</p>
        </div> 
    </div> `;

    mostrarProducto.append(content);
    })