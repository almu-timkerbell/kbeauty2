
var searchText = document.getElementById('search');
var btn = document.getElementById('btn');
var searchBar = document.getElementById('searchBar');
var containerDeLaSearchBar = document.getElementById('container-search-bar')

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

function waithide()
{
  var obj = document.getElementById("thisone");
  obj.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
      obj.style.display='none';
    }, 300);
}

