
var searchText = document.getElementById('search');
var btn = document.getElementById('btn');
var searchBar = document.getElementById('searchBar');

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
    btn.style.display = 'inline'; 
    searchBar.style.display = 'inline';
    searchText.style.display = 'none';
    
    
});

