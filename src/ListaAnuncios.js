class ListaNotas{
    constructor(){
        this.lista=[];
    }
    GetLista(){
        return this.lista;
    }
    AgregarAnuncio(anuncio){
        this.lista.unshift(anuncio);
    }
    MostrarLista(filtrar=null){
        listaAnunciosHTML.innerText="";
        const ListaAMostrar=filtrar || this.lista;
        ListaAMostrar.forEach((anuncio, index) => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            const content = document.createElement("p");
            
            title.innerText = anuncio.GetTitulo();
            content.innerText = anuncio.GetDetalle();
            
            listItem.appendChild(title);
            listItem.appendChild(content);
            listaAnunciosHTML.appendChild(listItem);
            
        });
    }
    
}
export default ListaNotas;