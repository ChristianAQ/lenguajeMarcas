let sumaTemperaturas = 0;
let vector = new Array(3);
let res

function reset() {
    sumaTemperaturas = 0;
    vector = new Array(3);
    res ="";
    document.getElementById('inherente').value="";
    document.getElementById('temperaturas').value=0;
    document.getElementById('media').value=0;
}

function datos() {
     res= prompt("Introduce nombre de la ciudad");

    document.getElementById('inherente').value=res;

    calculoMedia();
}

function calculoMedia() {
    for (i = 0; i < vector.length; i++) {
        vector[i] = parseInt(prompt("Introduzca temperatura " + (i + 1)));

        sumaTemperaturas += vector[i];
    }
    document.getElementById('temperaturas').value=vector;
    document.getElementById('media').value=(sumaTemperaturas / 3);
}

function calculoMayor() {
    var j = 0, k;
    for (i = 1; i < vector.length; i++) {
        for (j = 0; j < (vector.length - i); j++) {
            if (vector[j] > vector[j + 1]) {
                k = vector[j + 1];
                vector[j + 1] = vector[j];
                vector[j] = k;
            }
        }
    }

    if(sumaTemperaturas!=0){
        alert(vector[2]);
    }else{
        alert("Primero tienes que darle a inicio ");
    }
    
}

function calculoMenor() {
    if(sumaTemperaturas!=0){
        alert(vector[0]);
    }else{
        alert("Primero tienes que darle a inicio ");
    }
    
}

function todo(){
    if(sumaTemperaturas!=0){
        alert("Temperatura media de "+res+" es de "+(sumaTemperaturas/3)+"\nCon temperatura máxima de "+(vector[2])+"\ny temperatura menor de "+(vector[0]) );
    }else{
        alert("Primero tienes que darle a inicio ");
    }
}