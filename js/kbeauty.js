
var searchText = document.getElementById('search');
var btn = document.getElementById('btn');
var searchBar = document.getElementById('searchBar');
var containerDeLaSearchBar = document.getElementById('container-search-bar')
var animacion = document.getElementById('animacion');
var buttonHome = document.getElementById('buttonHome');

var d = document.getElementById("titulo");
d.addEventListener("mouseover", desplegar);

d.addEventListener("mouseout", originalTitle);

function desplegar()
{
d.innerHTML = "Welcome to KOB";

}

function originalTitle()
{
d.innerHTML = "Korean Original Beauty";
}


searchText.addEventListener('click', (event) =>{
    containerDeLaSearchBar.classList.toggle('hidden');
      
});





