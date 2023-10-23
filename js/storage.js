let consolasPrimerInicio = [
	{
		id: "5f49fab9-3135-4676-a160-5c3fdbb1ae92",
		descripcion: "Consola de hogar con gráficos en alta definición.",
		titulo: "PlayStation 5",
		precio: 499.99,
		cuotas: "12 cuotas $250",
		imagen:
			"https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true",
		categoria: "consolas",
		fechaDeCreacion: "2020-11-12",
	},
	{
		id: "2e897bad-d4e4-413d-a515-ed95df9ad917",
		fechaDeCreacion: "2017-03-03",
		descripcion: "Consola portátil con pantalla táctil.",
		titulo: "Nintendo Switch",
		precio: 299.99,
		cuotas: "12 cuotas $250",
		imagen:
			"https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp",
		categoria: "accesorios",
	},
	{
		id: "fc3025ec-f314-4b63-9765-1e8df3ee358a",
		descripcion:
			"Consola de hogar con alta potencia y compatibilidad hacia atrás.",
		titulo: "Xbox Series X",
		fechaDeCreacion: "2020-11-10",
		precio: 499.99,
		cuotas: "12 cuotas $250",
		imagen:
			"https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png",
		categoria: "juegos",
	},
];

let productos =
	JSON.parse(localStorage.getItem("productos")) || consolasPrimerInicio;

if (JSON.parse(localStorage.getItem("productos")) === null) {
	localStorage.setItem("productos", JSON.stringify(productos));
}

const userInicio = [
	{
		fullname: "Daniel Lee",
		email: "admin@admin.com",
		id: "6",
		password: "admin",
		role: "ROLE_ADMIN",
	},
	{
		fullname: "Samantha Davis",
		email: "samantha.davis@example.com",
		id: "7",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
	{
		fullname: "James Moore",
		email: "james.moore@example.com",
		id: "8",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
	{
		fullname: "Isabella Taylor",
		email: "isabella.taylor@example.com",
		id: "9",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
];

if (localStorage.getItem("users") === null) {
	localStorage.setItem("users", JSON.stringify(userInicio));
}
