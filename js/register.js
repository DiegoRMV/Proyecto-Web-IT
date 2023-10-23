
const usuarios = JSON.parse(localStorage.getItem("users"));

const formularioRegisterHTML = document.getElementById("register-form");


formularioRegisterHTML.addEventListener("submit", (evt) => {
	evt.preventDefault();

	const el = formularioRegisterHTML.elements;

	let id = "".toString(usuarios.length);

    console.log(id)


	let nuevoUsuario = {
		id: id,
		fullname: el.name.value,
		email: el.email.value,
		password: el.password.value,
		role: "ROLE_CLIENT",
	};

    const busqueda = usuarios.find((us) => {
		if (us.email === nuevoUsuario.email) {
			return true;
		}
	});

	if (busqueda) {
		Swal.fire("Error!", "Email ya esta registardo", "danger");
	} else {
		usuarios.push(nuevoUsuario);
        Swal.fire({
            icon: "success",
            title: "Usuario registrado correctamente",
            text: "El Usuario se registro correctamente!",
        });
    
        localStorage.setItem("users", JSON.stringify(usuarios));
    
        formularioRegisterHTML.reset();
	}
});

function obtenerFecha() {
	const fecha = new Date();
	let mes = fecha.getMonth() + 1;
	if (mes < 10) {
		mes = "0" + mes;
	}
	let dia = fecha.getDate();
	if (dia < 10) {
		dia = "0" + dia;
	}
	const year = fecha.getFullYear();

	const fechaFormateada = `${year}-${mes}-${dia}`;
	return fechaFormateada;
}
