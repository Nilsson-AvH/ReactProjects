//const arreglo = new Array(100);
/*const arreglo = [];
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)*/
const arreglo =[1,2,3,4];

let arreglo2 = [...arreglo,5]

const arreglo3 = arreglo2.map(function(x){
    return x*2
});

console.log(arreglo);
console.log(`Los valores de este arreglo son: ${arreglo}`);
console.log(`La longitud de este array es: ${arreglo.length}`);

console.log(arreglo2);
console.log(`Los valores de este arreglo2 son: ${arreglo2}`);
console.log(`La longitud de este array2 es: ${arreglo2.length}`);

console.log(arreglo3);
console.log(`Los valores de este arreglo3 son: ${arreglo3}`);
console.log(`La longitud de este array3 es: ${arreglo3.length}`);