
function mostrar(){

   
    var nombreZona=document.getElementById("nombreZona");
    var fechaZona=document.getElementById("fechaZona");
    var emailZona=document.getElementById("emailZona");
    var claveZona=document.getElementById("claveZona");

    var elnombre = localStorage.getItem("nombre"); 
    var lafecha = localStorage.getItem("fecha"); 
    var elcorreo = localStorage.getItem("email"); 
    var lacontra = localStorage.getItem("clave"); 

    nombreZona.innerHTML="<h2>Nombre: "+ elnombre +" </h2>";
    fechaZona.innerHTML="<h2>Fecha: "+ lafecha +" </h2>";
    emailZona.innerHTML="<h2>Correo: "+ elcorreo +" </h2>";
    claveZona.innerHTML="<h2>Contraseña: "+ lacontra +" </h2>";
 }

