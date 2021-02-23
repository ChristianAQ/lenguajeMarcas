function leer(){
    var nombre=localStorage.getItem("nombre");
    var mail=localStorage.getItem("mail");
    var mensaje=localStorage.getItem("mensaje");
    var fecha=localStorage.getItem("fecha");
    
    lblnombre.innerHTML="<b>"+ nombre+"</b>";
    lblmail.innerHTML="<b>"+ mail+"</b>";
    lblmensaje.innerHTML="<b>"+ mensaje+"</b>";
    lblfecha.innerHTML="<b>"+ fecha+"</b>";

}