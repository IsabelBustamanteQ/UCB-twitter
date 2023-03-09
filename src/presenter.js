import Anuncio from "./Anuncio.js";
import ListaAnuncios from "./ListaAnuncios.js";

const formularioAnuncio = document.querySelector("#formularioAnuncio");
const tituloAnuncio = document.querySelector("#tituloAnuncio");
const detalleAnuncio = document.querySelector("#detalleAnuncio");
const listaAnunciosHTML = document.querySelector("#listaAnunciosHTML");

let listaAnunciosNueva = new ListaAnuncios();

formularioAnuncio.addEventListener("submit", (event) => {
  event.preventDefault();
  if(tituloAnuncio==="")
  {
    
    alert("No es posible publicar un post sin título");
  }
  else{
    let AnuncioNuevo = new Anuncio(tituloAnuncio.value, detalleAnuncio.value);
    listaAnunciosNueva.AgregarAnuncio(AnuncioNuevo);
    listaAnunciosHTML.innerHTML = "";
  }
  
  listaAnunciosNueva.MostrarLista();
});
