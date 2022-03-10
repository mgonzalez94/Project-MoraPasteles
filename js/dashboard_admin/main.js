let btnMenu   = document.querySelector("#mora-btn-menu");
let txtSearch = document.querySelector("#mora-txt-busqueda");
let btnSearch = document.querySelector(".fa-magnifying-glass");
let sideBar   = document.querySelector(".mora-sidebar");

btnMenu.onclick = function () {
    btnMenu.classList.toggle("active");
}
btnSearch.onclick = function () {
    console.log("Entra1")
    btnSearch.classList.toggle("active");
}
txtSearch.onclick = function() {
    console.log("Entra");
}
sideBar.onclick = function () {
    sideBar.classList.toggle("active");
}