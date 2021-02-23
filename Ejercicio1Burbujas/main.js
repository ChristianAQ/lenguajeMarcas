//alert("Hola mundo ");

function burbuja(){
    let a=0;
    let b=0;
    let c=0;
    let aux=0;
    let resultado ="";

    a=parseInt(document.getElementById("a").value, 10);
    b=parseInt(document.getElementById("b").value, 10);
    c=parseInt(document.getElementById("c").value, 10);
    if(a>b){
        aux=a;
        a=b;
        b=aux;
    }
    if(a>c){
        aux=a;
        a=c;
        c=aux;
    }

    if(b>c){
        aux=b;
        b=c;
        c=aux;
    }

    resultado= a+", "+b+", "+c;
    document.getElementById("r").value=resultado;
    document.getElementById('inherente').innerHTML += resultado;
    
}


function mensaje(){
    alert("Hola a todos, \nSoy Christian armijos");
}

function pre(){
    var nombre = confirm("Te gusta html?");
    
    if(nombre==true){
        alert("Estas aprobado");
    }else if(nombre ==false){
        var d = confirm("Por que no te gusta?");
            if(d==true){
                alert("Has pulsado aceptar a la primera");
            }else if(d==false){
                var de = confirm("Pero porque no te gusta?");
                if(de==true){
                    alert("Has pulsado aceptar a la segunda");
                }else{
                    alert("Estas suspendo");
            }
        }
    }
}