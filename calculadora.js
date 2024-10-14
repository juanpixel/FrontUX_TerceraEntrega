console.log("Bienvenido a la calucadora");

/* Aqui se declaran las variables globales que utililzaremos */

let resultado;
let validador = true;
let datoA;
let datoB;

/* Funciones basicas sumar, restar, multipmicar y dividir*/
 
function suma(a,b){
    resultado = a+b;
    console.log(`El resultado de la suma es ${resultado}`)
    return resultado
};

function restar(a,b){
    resultado = a-b
    console.log(`El resultado de la resta es ${resultado}`)
    return resultado;
};

function multiplicar(a,b){
    resultado = a*b
    console.log(`El resultado de la multiplicación es ${resultado}`)
    return resultado;
};

function dividir(a,b){
    resultado = a/b
    console.log(`El resultado de la división es ${resultado}`)
    return resultado;
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")
console.log(`
    Testea algúna de las operaciones:

    • suma(a,b);
    • resta(a,b);
    • multiplicar(a,b);
    • dividir(a,b);
    • cuadradoDeUnNumero(a);
    • promedioDeTresNumeros(a,b,c);
    • calculadorPorcentaje (a,b);
    • generadorDePorcentaje(a,b);

    Tambien puedes usar la calculadora completa con:

    • appCalculadora();
    `)

/* Funciones extra Cuadrado de un número, Promedio de 3 números, Calcular% y divGenerar%*/
function cuadradoDeUnNumero(a){    
    multiplicar(a,a);
    console.log(`El cuadrado de ${a} es ${resultado}`)
}

function promedioDeTresNumeros(a,b,c){
   
    let suma1 = suma(a,b)
    let sumatotal = suma(suma1,c)

    dividir(sumatotal,3);

    console.log(`El promedio de  ${a}, ${b}, ${c} es ${resultado}`)
}

function calcularPorcentaje(a,b){
    let multiplica1 = multiplicar(a,b)

    dividir(multiplica1,100)
    
    console.log(`El ${b}% de ${a} es ${resultado}`)
}

function generadorDePorcentaje(a,b){
    let divide1 = dividir(a,b)

    multiplicar(divide1,100)

    console.log(`${a} es el ${resultado}% de ${b}`)
}

/*App para ser usada con prompt*/

/*1. se genera la funcion solicitar datos, ya que muchas operaciones funcionan usando 2 valores */

function solicitarDosDatos(){
    datoA = parseInt(prompt('Ingresa el primer valor'))
    datoB = parseInt(prompt('Ingresa el segundo valor'))
    return datoA, datoB
}

/* 2. se gerera la función continuar que hara que la app pare si es necesario */

function continuar(){
    
    let deseaContinuar = parseInt (prompt(`¿Deseas Continuar? (ingresa el número de la opción)
        1: Si
        2: No`
    ));

    if (deseaContinuar === 1){
        validador = true
        resultado = undefined

    } else if(deseaContinuar === 2){
        validador = false
    } else{
        alert("Dato incorrecto ingresa otro valor")
        continuar();
    }
}

/* 3. se geners la función CalculadoraPrompt que sera la consola donde se ingresaran lo datos */

function calculadoraPrompt(){
    let operacion = parseInt(prompt(`
        Que operación deseas realizar (ingresa el número de la opción)
        1. Sumar
        2. Resatar
        3. Multiplicar
        4. Dividir
        5. Cuadrado de un número  
        6. Promedio de 3 números
        7. Calculadro de porcentaje
        8. Generador de porcentaje
    `))

    switch(operacion){
        case 1:
            solicitarDosDatos();
            suma(datoA,datoB);
            alert(`El resultado de la suma es ${resultado}`)
            break;
        case 2:
            solicitarDosDatos();
            restar(datoA,datoB);
            alert(`El resultado de la resta es ${resultado}`)
            break;
        case 3:
            solicitarDosDatos();
            multiplicar(datoA,datoB);
            alert(`El resultado de la multiplicación es ${resultado}`)
            break;
        case 4:
            solicitarDosDatos();
            dividir(datoA,datoB);
            alert(`El resultado de la división es ${resultado}`)
            break;
        case 5:
            let datounico =  parseInt(prompt('Ingresa el primer valor'))
            cuadradoDeUnNumero(datounico);
            alert(`El cuadrado de ${datounico} es ${resultado}`)
            break;
        case 6:
            solicitarDosDatos();
            let datoC = parseInt(prompt('Ingresa el tercer valor'))
            promedioDeTresNumeros(datoA,datoB,datoC);
            alert(`El promedio de  ${datoA}, ${datoB}, ${datoC} es ${resultado}`)
            break;
        case 7:
            solicitarDosDatos();
            calcularPorcentaje(datoA,datoB);
            alert(`El ${datoB}% de ${datoA} es ${resultado}`)
            break;
        case 8:
            solicitarDosDatos();
            generadorDePorcentaje(datoA,datoB);
            alert(`${datoA} es el ${resultado}% de ${datoB}`)
            break;
        default:
            alert(`Valor Incorrecto intenta otra vez`);
            calculadoraPrompt();
            break;

    }
}

/* 4. se genera la funcion appCalculadora para ejecutrar el programa con el uso de prompt */

function appCalculadora(){

    while(validador){
        calculadoraPrompt();
        continuar();
    }

}









