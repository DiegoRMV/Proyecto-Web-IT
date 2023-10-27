let usuario = JSON.parse(localStorage.getItem("currentUser"));

if(!usuario || usuario.role !== 'ROLE_ADMIN'){
    window.location.href = '/index.html'
}