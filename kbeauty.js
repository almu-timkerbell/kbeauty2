

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