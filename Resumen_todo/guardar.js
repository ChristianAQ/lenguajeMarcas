function comenzar(){
    var boton=document.getElementById("grabar"); 
    boton.addEventListener("click", itemNuevo, false); 
}

function itemNuevo(){
    alert("entra1");
    var nombre=document.getElementById("nombre").value; 
    var mail=document.getElementById("mail").value;  
    var mensaje=document.getElementById("mensaje").value; 
    var fecha=document.getElementById("fecha").value;  
    
    alert(""+nombre+" "+mail+" "+mensaje+" "+fecha);
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("mail",mail);
    localStorage.setItem("mensaje",mensaje);
    localStorage.setItem("fecha",fecha);
}

window.addEventListener("load",comenzar, false);