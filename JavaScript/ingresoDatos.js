//IMPRIMIR UN MENSAJE EN EL DOC
document.writeln("HOLA MUNDO!");
alert("Hola mundo");

//INGRESAR DATOS POR TECLADO
let num1=prompt("Ingrese un numero: ");
let num2=prompt("Ingrese otro numero: ");
let sum;

let n1=parseInt(num1);
let n2=parseInt(num2);
sum=n1+n2;
document.writeln(sum);
console.log(`La suma es ${sum}`);

//TABLA DE MULTIPLICAR
let multi=parseInt(prompt("Ingrese el factor"));
for(let i=1; i<=10; i++){
    let multiplicar=i*multi;
    console.log(multiplicar);
}