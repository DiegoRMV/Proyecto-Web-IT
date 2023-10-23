const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const navIcons = document.getElementById("nav-icons");
const navInfo = document.getElementById("nav-info");
const navRegister = document.getElementById("nav-register");


if (currentUser) {
	if (currentUser.role === "ROLE_ADMIN") {
		navIcons.innerHTML = `<a href="/pages/admin/admin-products.html" class="nav-link cart-icon mx-2">
        <i class="fa-solid fa-shopping-cart text-white"></i>
        </a>
        <a href="/pages/admin/admin-users.html" class="nav-link cart-icon mx-2 text-white">
        <i class="fa-solid fa-user text-white"></i>
        </a>`;
		navInfo.innerHTML = `<div class="dropdown-center">
        <a class="btn btn-outline-light nav-name border-2 dropdown-toggle" href="#" role="button"
        data-bs-toggle="dropdown" aria-expanded="true">
        ${currentUser.fullname}
        </a>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Perfil</a></li>
        <li><a class="dropdown-item" href="/pages/admin/admin-users.html">Usuarios</a></li>
        <li><a class="dropdown-item" href="/pages/admin/admin-products.html">Productos</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li class="px-2"><a class="dropdown-item nav-register nav-logout text-center rounded-2" href="#" onclick="logout()">Logout</a></li>
        </ul>
        </div>`;
	} else {
		navIcons.innerHTML = `<a href="#" class="nav-link cart-icon mx-2">
        <i class="fa-solid fa-shopping-cart text-white"></i>
        </a>
        <a href="#" class="nav-link cart-icon mx-2 text-white">
        <i class="fa-solid fa-user text-white"></i>
        </a>`;
		navInfo.innerHTML = `<div class="dropdown-center">
        <a class="btn btn-outline-light nav-name border-2 dropdown-toggle" href="#" role="button"
        data-bs-toggle="dropdown" aria-expanded="true">
        ${currentUser.fullname}
        </a>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Perfil</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li class="px-2"><a class="dropdown-item nav-register nav-logout text-center rounded-2" href="#" onclick="logout()">Logout</a></li>
        </ul>
        </div>`;
	}
}
