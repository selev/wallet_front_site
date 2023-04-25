
var nombreF;
var salarioF;
var gastoF;
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
    formulario={
        nombre:nombreF,
        salario:salarioF,
        gastos:gastoF
    }

}



function enviarFormulario(){
    console.log("entro al fetch");
    fetch("https://2ac22411-09e1-451f-a8d7-bf9b048b892c.mock.pstmn.io/wallet/finanzas",
    {method: 'post',
    body:JSON.stringify(formulario)}
    )
    ;

}

//fetch("")