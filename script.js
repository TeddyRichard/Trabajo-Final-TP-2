
const listaDeProductos = document.querySelector("#product-list");
  
let productos;
const cargarProductos = async () =>
{
 
 productos = localStorage.getItem("productos");

    if(productos == null)
    {

      const response = await fetch("productos.json");
      productos = await response.json();

      localStorage.setItem("productos", JSON.stringify(productos));

    }
    
    if (typeof productos == "string")
     {
        productos = JSON.parse(productos);
     }

    
};
    

cargarProductos();


productos.forEach((productos) => 
{
  let content = document.createElement("div");
  content.innerHTML = `
  <div class="item">
  <figure>
      <img src="${productos.img}">
  </figure>
    <div class="info-product">
      <p class="marca">${productos.marca}</p>
      <p class="price">${productos.precio}</p>
    </div>
  </div>`;

  listaDeProductos.append(content);

  let masDetalles = document.createElement("button");
  masDetalles.innerText = "Más Detalles";
  content.append(masDetalles);
  masDetalles.className = "info-product";


  const productoElegido = [];

  masDetalles.addEventListener("click", () =>
   {
    
    productoElegido.push({
      id: productos.id,
      imagen: productos.img,
      marca: productos.marca,
      modelo: productos.modelo,
      detalle: productos.detalle,
      precio: productos.precio,
      puntaje: productos.puntuacion,
    });
    
    localStorage.setItem("producto", JSON.stringify(productoElegido));
 
    location.href ="detalles.html";
  })

});







  

