
function comenzar(){
    var boton=document.getElementById("enviar");
    boton.addEventListener("click", guardar, false); 
}
function guardar(){
    var nombre=document.getElementById("nombre").value; 
    var fecha=document.getElementById("fecha").value; 
    var email=document.getElementById("email").value; 
    var clave=document.getElementById("clave").value; 

    //alert(nombre+" "+fecha+" "+email+" "+clave);

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("fecha",fecha);
    localStorage.setItem("email",email);
    localStorage.setItem("clave",clave);

}


window.addEventListener("load",comenzar, false);