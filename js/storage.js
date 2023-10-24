let consolasPrimerInicio = [
	{
		id: "5f49fab9-3135-4676-a160-5c3fdbb1ae92",
		descripcion: "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. ",
		titulo: "Motorola Moto G8 Plus",
		precio: 60000,
		cuotas: "12 cuotas $250",
		imagen:
			"https://http2.mlstatic.com/D_NQ_NP_891864-MLA49909213174_052022-O.webp",
		categoria: "celular",
		fechaDeCreacion: "2020-11-12",
	},
	{
		id: "2e897bad-d4e4-413d-a515-ed95df9ad917",
		fechaDeCreacion: "2017-03-03",
		descripcion: "Estos auriculares on-ear cuentan con un micrófono incorporado, lo que te permite comunicarte con claridad durante tus llamadas o sesiones de chat.",
		titulo: "Auriculares Logitech H390",
		precio: 35000,
		cuotas: "12 cuotas $250",
		imagen:
			"https://http2.mlstatic.com/D_NQ_NP_848082-MLA54427431767_032023-O.webp",
		categoria: "accesorio",
	},
	{
		id: "fc3025ec-f314-4b63-9765-1e8df3ee358a",
		descripcion:
			"La notebook HP 240 G7 es una solución tanto para trabajar y estudiar como para entretenerte, ya sea en tu casa o en la oficina.",
		titulo: "Notebook HP 240 G7 plateado",
		fechaDeCreacion: "2020-11-10",
		precio: 80000,
		cuotas: "12 cuotas $250",
		imagen:
			"https://http2.mlstatic.com/D_NQ_NP_853536-MLA46010757687_052021-O.webp",
		categoria: "notebook",
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
