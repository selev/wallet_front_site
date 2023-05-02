
var nombreF;
var salarioF;
var gastoF;
var formulario;




imprimir=>{
   

    event.preventDefault();
    TomarDatos();  
    enviarFormulario();  
}

TomarDatos=>{
    
    nombreF= document.getElementById('EntradaNombre').value;
    salarioF= document.getElementById('EntradaSalario').value;
    gastoF= document.getElementById('EntradaGastos').value;
    formulario={
        nombre:nombreF,
        salario:salarioF,
        gastos:gastoF
    }

}



var EFormulario =enviarFormulario =>{
    console.log("entro al fetch");
    fetch("https://2ac22411-09e1-451f-a8d7-bf9b048b892c.mock.pstmn.io/wallet/finanzas",
    {method: 'post',
    body:JSON.stringify(formulario)}
    )
    ;

}

//requerimiento entrar a pagina y mostrar en consola la lista de monedas

function RecibirMoneda (){

    fetch("http://localhost:8080/moneda",
    {
        method: 'get'        
    }).then(response => response.json())
    .then(response =>InsertarMoneda(response))
    .then(response => console.log("Cuerpo del Json: ",response));
    

    
}

function InsertarMoneda(TipoMoneda){
    let opciones= document.getElementById("EntradaMoneda");
    console.log(TipoMoneda);
    for(i=0;i<TipoMoneda.length;i++){
        let NuevaMoneda = TipoMoneda[i];
        
        let NuevaOpcion = document.createElement('option');
        NuevaOpcion.text=NuevaMoneda;
        NuevaOpcion.value=i;
        
        opciones.appendChild(NuevaOpcion);  

    }

    return 51515;


}



RecibirMoneda();

