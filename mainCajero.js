


let cuentas = [
   { nombre: "Mali", saldo: 200, password: 'helloworld' },
   { nombre: "Gera", saldo: 290, password: '133' },
   { nombre: "Maui", saldo: 67, password: '123' }
  ];


function verificarPass(){
pass=prompt("Ingresa contraseña")
if (pass==cuentas[0].password){
  alert("Bienvenido Mali")
  saldoInicial() 
  document.getElementById('btnIngresarC1').disabled=true
  document.getElementById('btnIngresarC2').style.display = "none"
  document.getElementById('btnIngresarC3').style.display = "none"
}else if(pass=="Cancel"||pass==null){
  alert("Canceled")  
}else{
  alert("Intentelo nuevamente...")
  return verificarPass()
}
}


function verificarPass2(){
  pass=prompt("Ingresa contraseña")
  if (pass==cuentas[1].password){
    alert("Bienvenido Gera")
    saldoInicial2()
    document.getElementById('btnIngresarC1').style.display = "none"
    document.getElementById('btnIngresarC2').disabled=true
    document.getElementById('btnIngresarC3').style.display = "none"    
  }else if(pass=="Cancel"||pass==null){
    alert("Canceled")  
  }else{
    alert("Intentelo nuevamente...")
    return verificarPass()
  }
  }


  function verificarPass3(){
    pass=prompt("Ingresa contraseña")
    if (pass==cuentas[2].password){
      alert("Bienvenido Maui")
      saldoInicial3()
      document.getElementById('btnIngresarC1').style.display = "none"
      document.getElementById('btnIngresarC2').style.display = "none"
      document.getElementById('btnIngresarC3').disabled=true     
    }else if(pass=="Cancel"||pass==null){
      alert("Canceled")  
    }else{
      alert("Intentelo nuevamente...")
      return verificarPass()
    }
    }



function saldoInicial(){
var resultado = document.getElementById("resultado");
resultado.innerHTML= "<div id='operaciones' class='op1'><div id='flex'><hr><h3>---------------   Operaciones  ------------</h3><input type='button' id='consultar' class='btn1' value='Consultar'><input type='button' id='depositar' class='btn2' value='Depositar'><input type='button' id='retirar' class='btn3'value='Retirar'><button type='button' class='btn btn-danger btn-lg' id='btncancelar'>CANCELAR</button></div>";


//OPERACIONES
//OPERACION CONSULTAR SALDO ACTUAL
var consultarS = document.getElementById("consultar");
var cons1=cuentas[0].saldo
consultarS.addEventListener("click", saldo);

function saldo(){
  var calcular1=document.getElementById("calcular1");
  calcular1.innerHTML = "Su saldo actual es: " + cons1 + "<hr />";
}
//OPERACION DEPOSITAR
var depositar = document.getElementById("depositar");
depositar.addEventListener("click", deposito);
var calcularNuevoSaldo=document.getElementById("calcularNuevoSaldo");

function deposito(monto)
{
	var monto = Number(prompt("Indica el valor a depositar: ", "100"));
 
		if(monto+cons1 <990 && monto+cons1>10)
		{
			cons1=cons1+monto
			calcularNuevoSaldo.innerHTML= "Se ha depositado " + monto + "<hr />";
		}
		
	else
	{
		calcularNuevoSaldo.innerHTML = ("Estas superando el limite de $990; operacion cancelada" + "<hr />");
	}
}
//OPERACION RETIRAR
//RETIRAR SALDO-----------------------------------
var retirar = document.getElementById("retirar");
retirar.addEventListener("click", retiro);
var calcularSaldoRetiro=document.getElementById("calcularSaldoRetiro");

function retiro(cantidad){
  var cantidad = Number(prompt("Indica el valor a retirar: ", "100"));
  if(cons1-cantidad <10)
  {
    calcularSaldoRetiro.innerHTML= "No tienes fondos suficientes; el minimo es de $10";     
  }else{
    cons1 -= cantidad;
    calcularSaldoRetiro.innerHTML="has retirado $"+ cantidad +" tu nuevo saldo es de: "+ cons1

  }
}

//Boton cancelar
var btncancelar = document.getElementById("btncancelar");
btncancelar.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
  alert("Gracias por tu preferencia !!")
  location.reload();
});

}



function saldoInicial2(){
  var resultado = document.getElementById("resultado");

  resultado.innerHTML= "<div id='operaciones' class='op1'><div id='flex'><hr><h3>---------------   Operaciones  ------------</h3><input type='button' id='consultar' class='btn1' value='Consultar'><input type='button' id='depositar' class='btn2' value='Depositar'><input type='button' id='retirar' class='btn3'value='Retirar'><button type='button' class='btn btn-danger btn-lg' id='btncancelar'>CANCELAR</button></div>";
  
  
  //OPERACIONES
  //OPERACION CONSULTAR SALDO ACTUAL
  var consultarS = document.getElementById("consultar");
  var cons1=cuentas[1].saldo
  consultarS.addEventListener("click", saldo);
  
  function saldo(){
    var calcular1=document.getElementById("calcular1");
    calcular1.innerHTML = "Su saldo actual es: " + cons1 + "<hr />";
  }
  //OPERACION DEPOSITAR
  var depositar = document.getElementById("depositar");
  depositar.addEventListener("click", deposito);
  var calcularNuevoSaldo=document.getElementById("calcularNuevoSaldo");
  
  function deposito(monto)
  {
    var monto = Number(prompt("Indica el valor a depositar: ", "100"));
   
      if(monto+cons1 <990 && monto+cons1>10)
      {
        cons1=cons1+monto
        calcularNuevoSaldo.innerHTML= "Se ha depositado " + monto + "<hr />";
      }
      
    else
    {
      calcularNuevoSaldo.innerHTML = ("Estas superando el limite de $990; operacion cancelada" + "<hr />");
    }
  }
  //OPERACION RETIRAR
  //RETIRAR SALDO-----------------------------------
  var retirar = document.getElementById("retirar");
  retirar.addEventListener("click", retiro);
  var calcularSaldoRetiro=document.getElementById("calcularSaldoRetiro");
  
  function retiro(cantidad){
    var cantidad = Number(prompt("Indica el valor a retirar: ", "100"));
    if(cons1-cantidad <10)
    {
      calcularSaldoRetiro.innerHTML= "No tienes fondos suficientes; el minimo es de $10";     
    }else{
      cons1 -= cantidad;
      calcularSaldoRetiro.innerHTML="has retirado $"+ cantidad +" tu nuevo saldo es de: "+ cons1
  
    }
  }
  
  //Boton cancelar
  var btncancelar = document.getElementById("btncancelar");
  btncancelar.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    alert("Gracias por tu preferencia !!")
    location.reload();
  });
  
  }
  

  
  function saldoInicial3(){
    var resultado = document.getElementById("resultado");
    
    resultado.innerHTML= "<div id='operaciones' class='op1'><div id='flex'><hr><h3>---------------   Operaciones  ------------</h3><input type='button' id='consultar' class='btn1' value='Consultar'><input type='button' id='depositar' class='btn2' value='Depositar'><input type='button' id='retirar' class='btn3'value='Retirar'><button type='button' class='btn btn-danger btn-lg' id='btncancelar'>CANCELAR</button></div>";
    
    
    //OPERACIONES
    //OPERACION CONSULTAR SALDO ACTUAL
    var consultarS = document.getElementById("consultar");
    var cons1=cuentas[2].saldo
    consultarS.addEventListener("click", saldo);
    
    function saldo(){
      var calcular1=document.getElementById("calcular1");
      calcular1.innerHTML = "Su saldo actual es: " + cons1 + "<hr />";
    }
    //OPERACION DEPOSITAR
    var depositar = document.getElementById("depositar");
    depositar.addEventListener("click", deposito);
    var calcularNuevoSaldo=document.getElementById("calcularNuevoSaldo");
    
    function deposito(monto)
    {
      var monto = Number(prompt("Indica el valor a depositar: ", "100"));
     
        if(monto+cons1 <990 && monto+cons1>10)
        {
          cons1=cons1+monto
          calcularNuevoSaldo.innerHTML= "Se ha depositado " + monto + "<hr />";
        }
        
      else
      {
        calcularNuevoSaldo.innerHTML = ("Estas superando el limite de $990; operacion cancelada" + "<hr />");
      }
    }
    //OPERACION RETIRAR
    //RETIRAR SALDO-----------------------------------
    var retirar = document.getElementById("retirar");
    retirar.addEventListener("click", retiro);
    var calcularSaldoRetiro=document.getElementById("calcularSaldoRetiro");
    
    function retiro(cantidad){
      var cantidad = Number(prompt("Indica el valor a retirar: ", "100"));
      if(cons1-cantidad <10)
      {
        calcularSaldoRetiro.innerHTML= "No tienes fondos suficientes; el minimo es de $10";     
      }else{
        cons1 -= cantidad;
        calcularSaldoRetiro.innerHTML="has retirado $"+ cantidad +" tu nuevo saldo es de: "+ cons1
    
      }
    }
    
    //Boton cancelar
    var btncancelar = document.getElementById("btncancelar");
    btncancelar.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
      alert("Gracias por tu preferencia !!")
      location.reload();
    });
    
    }
    
    

