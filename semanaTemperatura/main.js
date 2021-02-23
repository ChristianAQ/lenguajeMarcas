
//arreglos y variables
const diasSemana =7;
var array_madrid = new Array(diasSemana);
var array_barcelona = new Array(diasSemana);
var array_nacional = new Array(diasSemana);

var numeroCiudades=2;
var media1=0;
var media2=0;
var mediaN=0;
var suma1=0;
var suma2=0;
var sumaN=0;
var nombreC1;
var nombreC2;

function ciudad_uno(){

    nombreC1= prompt("Introduce el nombre de la ciudad");
    document.getElementById('c1').innerHTML=nombreC1;

    for(i=0;i<array_madrid.length;i++){
        do{
            array_madrid[i] = (prompt("En "+nombreC1+" introduce la tempertura nº"+(i+1)));
        }while(array_madrid[i]=="");
        array_madrid[i] = parseInt(array_madrid[i]);
        
        suma1 += array_madrid[i];
        media1 = (suma1/diasSemana);
        document.getElementById('mediaMadrid').value=media1;
    }
    suma1=0;
    for (i = 1; i < array_madrid.length; i++) {
        for (j = 0; j < (array_madrid.length - i); j++) {
            if (array_madrid[j] > array_madrid[j + 1]) {
                k = array_madrid[j + 1];
                array_madrid[j + 1] = array_madrid[j];
                array_madrid[j] = k;
            }
        }
    }

    document.getElementById('maxMadrid').value=array_madrid[6];
    document.getElementById('mimMadrid').value=array_madrid[0];
}

function ciudad_dos() {

    nombreC2= prompt("Introduce el nombre de la ciudad");
    document.getElementById('c2').innerHTML=nombreC2;

    for(i=0;i<array_barcelona.length;i++){
        do{
            array_barcelona[i] = (prompt("En "+nombreC2+" introduce la tempertura nº"+(i+1)));
        }while(array_barcelona[i]=="");
        array_barcelona[i] = parseInt(array_barcelona[i]);

        suma2 += array_barcelona[i];
        media2 = (suma2/diasSemana);
        document.getElementById('mediaBarcelona').value=media2;
    }
    suma2=0;
    var k;
    for (i = 1; i < array_barcelona.length; i++) {
        for (j = 0; j < (array_barcelona.length - i); j++) {
            if (array_barcelona[j] > array_barcelona[j + 1]) {
                k = array_barcelona[j + 1];
                array_barcelona[j + 1] = array_barcelona[j];
                array_barcelona[j] = k;
            }
        }
    }

    document.getElementById('maxBarcelona').value=array_barcelona[6];
    document.getElementById('minBarcelona').value=array_barcelona[0];
}

function nacional() {
    if(media1!=0 && media2!=0){
        sumaN = media1 + media2;
        mediaN = (sumaN/numeroCiudades);
        document.getElementById('mediaNacional').value=mediaN;

        //media de temperatura maxima
        
        var maxNacional = (array_barcelona[6] + array_madrid[6])/numeroCiudades;;
        document.getElementById('maxNacional').value=maxNacional;

        //media de temperatura minima
        var minNacional = (array_barcelona[0] + array_madrid[0])/numeroCiudades;
        document.getElementById('minNacional').value=minNacional;
    }else{
        alert("Primero introduce los datos en el boton ciudad");
    }
}









