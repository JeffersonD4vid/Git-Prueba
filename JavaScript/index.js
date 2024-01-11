//COMENTARIOS DE UNA SOLA LINEA
/*COMENTARIOS DE MAS DE UNA LINEA */

//IMPRIMIR UN SMS EN CONSOLA
console.log("Hola Mundo <3");

//DECLARACION DE VARIABLES
let nombre="Jefferson";
let apellido="Malan";
let edad=21;

//CONCATENACION DE CADENAS 
console.log("Mi nombre es: "+nombre+" y mi apellido es: "+apellido+" y tengo: "+edad+" años")

//TEMPLATE DE CADENAS - INTERPOLACION DE CADENAS
console.log(`Mi nombres y mi apellido es ${nombre} ${apellido} y tengo ${edad}`);

//TIPO DE DATO UNDEFINED
let a;
console.log(a)

//TIPO DE DATO NAN
let b=5;
let c="Hola";
let multi=b*c;
console.log(multi);

//TIPO DE DATOS OBJETO
const persona ={
    nombre:"Jefferson",
    apellido:"Malan",
    edad:21,
    estado_civil:"Soltero",
    pasatiempos:["Leer", "Escribir", "Enseñar"],
    estudios:{
        primaria:"LUIS PASTEUR",
        secundaria:"CNG",
        superior:"ITSQMET"
    },
    saludar:function(){
        return "Buenas noches";
    }
}

console.log(persona.nombre);
console.log(persona.saludar());

//TIPO DE DATO ARRAY
const arreglo=["Hola", true, 22, "Chao"];
console.log(arreglo);
console.log(arreglo[0]);

arreglo.push("David");
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

//OPERADOR TYPEOF
console.log(typeof a);