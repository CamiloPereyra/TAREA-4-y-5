alert("Bienvenido");
let npar=1;
let k=1;
let ingresado,nombre;
nombre= prompt("Ingrese su nombre:");
alert("Bienvenido "+nombre);
ingresada=prompt("Ingrese un numero y le mostraré los numeros pares que existen hasta ese numero:");
while (npar<=ingresada){
    if(npar==2*k){
        console.log(npar);
        k=k+1;
    }
    npar=npar+1;
}
alert("Los resultados ya estan en consola "+nombre);
alert("Tarea 5");
console.log("Numeros del 5 al 50 (divisibles por 3 y 5):");
for(let i=5;i<=50;i++){
    if((i%5==0 ) && (i%3==0)){
        console.log(i);
    }
}
