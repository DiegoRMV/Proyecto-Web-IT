let productos = JSON.parse(localStorage.getItem("productos"));

const mainProductos = document.getElementById("main-productos");

mostrarProductos(productos);

function mostrarProductos(array) {
	mainProductos.innerHTML = "";

	array.forEach(function (producto, index) {
		mainProductos.innerHTML += 
        `<div class="col-12 col-md-6 col-lg-4 mb-5">
        <div class="product-card text-center bg-dark text-white p-2">
            <div class="card-header img-area rounded-3 mb-4">
                <figure>
                    <img src="${producto.imagen}" class="img-fluid" alt="">
                </figure>
            </div>
            <div class="card-main">
                <h2>${producto.titulo}</h2>
                <div class="card-description">
                    <p>${producto.descripcion}</p>
                </div>

                <div class="card-prices">
                    <div class="card-payments">${producto.cuotas}</div>
                    <div class="gradient-my">$ ${producto.precio}</div>
                </div>
            </div>
            <div class="card-footer">
                <button class="card-details">Ver detalles</button>
                <button class="card-buy">Comprar</button>
            </div>
        </div>
    </div>`;
	});
}