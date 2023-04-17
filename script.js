
var nombre;

function imprimir(){
   nombre= document.getElementById('EntradaNombre').value;
    if(nombre==null){
        console.log("no hay nada");
    }else{
        console.log(nombre);
    }

    event.preventDefault();    
}