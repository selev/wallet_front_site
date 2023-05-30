
var nombreF;
var salarioF;
var gastoF;
var monedaF;
var formulario;




function imprimir(){
   

    event.preventDefault();
    TomarDatos();  
    enviarFormulario();  
}

function TomarDatos(){
    
    nombreF= document.getElementById('EntradaNombre').value;
    salarioF= document.getElementById('EntradaSalario').value;
    gastoF= document.getElementById('EntradaGastos').value;
    monedaF= document.getElementById('EntradaMoneda').value;
    formulario={
        nombre:nombreF,
        salario:salarioF,
        gastos:gastoF,
        moneda:monedaF
    }

}




function enviarFormulario (){
    console.log("formulario del fetch: "+formulario);
    fetch("http://localhost:8080/finanza",
    {method: 'post',
    headers: {"Content-Type": "application/json"},
    
    body:JSON.stringify(formulario)}
    )
    ;
    

}



function RecibirMoneda (){

    fetch("http://localhost:8080/moneda",
    {
        method: 'get'        
    }).then(response => response.json())
    .then(response =>InsertarMoneda(response))
    .then(response => console.log("Cuerpo del Json: ",response));
    

    
}

function InsertarMoneda(BaseMoneda){
    let opciones= document.getElementById("EntradaMoneda");
    console.log(BaseMoneda);
    for(i=0;i<BaseMoneda.length;i++){
        
        let NuevaOpcion = document.createElement('option');
        NuevaOpcion.text=BaseMoneda[i].pais;
        NuevaOpcion.value=BaseMoneda[i].id;
        
        opciones.appendChild(NuevaOpcion);  

    }

    return 51515;


}





RecibirMoneda();

