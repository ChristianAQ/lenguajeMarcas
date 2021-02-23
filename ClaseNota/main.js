
let nAlumnos;
let vectorNotas = new Array(nAlumnos);
let vectorAlumnos = new Array(nAlumnos);
let menor=999,mayor=0;
let nombreMenor,nombreMayor;
let media=0;

function llamada() {
    //let dam = parseInt(prompt("Cuantos DAM hay: "));
    var dam =parseInt(prompt("Cuantos DAM hay: "));
    var i=0;
    for (i = 0; i < dam; i++) {
        nAlumnos = parseInt(prompt("Cuantos alumnos tiene la clase: Dam" + (i + 1))+
        "\nIntroduzca la nota de Dam" + (i + 1));

        vectores();
        mayorMenor();

        console.log("Dam"+(i+1)+" sus notas son: "+
        "\nEl alumno con nota menor es "+nombreMenor+" su nota es "+menor+
        "\nEl alumnos con nota mayor es  "+nombreMayor+" su nota es "+mayor+
        "\nCon una nota media de todos los alumnos de: "+media);
        menor=999,mayor=0;
        nombreMenor="",nombreMayor="";
        media=0;
    }
}



function vectores() {
    var i =0;
    let suma=0;
    while (i < nAlumnos) {

        vectorAlumnos[i] = prompt("Introduzca el nombre del alumno " + (i + 1));
        vectorNotas[i] = parseInt(prompt("Introduzca nota del alumno " + (i + 1)));
        suma += vectorNotas[i];
        i++;
    }
    media=suma/nAlumnos;

    return true;
}

function mayorMenor() {

    for(i=0;i<vectorNotas.length;i++){

        if(vectorNotas[i]<menor){
            menor=vectorNotas[i];
            nombreMenor=vectorAlumnos[i];
        }
        if(vectorNotas[i]>mayor){
            mayor=vectorNotas[i];
            nombreMayor=vectorAlumnos[i];
        }
    }

    return true;    
}



window.addEventListener("load", llamada(), false);