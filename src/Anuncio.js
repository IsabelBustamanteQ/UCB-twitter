class Anuncio{
    constructor(titulo, detalle){
        this.titulo=titulo;
        this.detalle=detalle;
    }
    GetTitulo(){
        return this.titulo;
    }
    GetDetalle(){
        return this.detalle;
    }
}
export default Anuncio;