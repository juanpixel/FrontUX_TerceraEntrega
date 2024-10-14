console.log("Bienvenido a la calucadora");

let validador = true;
let resultado = 0;
/* 
while(validador){
    calucadora();
    continuar();
} */

function calucadora(){
    let operacion = parseInt(prompt(`
        Que operación deseas realizar (ingresa el numero de la opcion)
        1. Sumar
        2. Reatar
        3. Multiplicar
        4. Dividir
    `))
    
    let a = parseInt(prompt('Ingresa el primer valor'))
    let b = parseInt(prompt('Ingresa el segundo valor'))
    
    switch(operacion){
        case 1:
            suma(a,b);
            break;
        case 2:
            restar(a,b);
            break;
        case 3:
            multiplicar(a,b);
            break;
        case 4:
            dividir(a,b);
            break;
    }
    
    alert(`El resultado es ${resultado}`)
}
 
function suma(a,b){
    resultado = a+b;
    return resultado
    
};

function restar(a,b){
    resultado = a-b
    return resultado;
};

function multiplicar(a,b){
    resultado = a*b
    return resultado;
};

function dividir(a,b){
    resultado = a/b
    return resultado;
}

function cuadradoDeUnNumero(){
    let a = parseInt(prompt('Ingresa el número que desea elevar al cuadrado'))
    
    multiplicar(a,a);

    console.log(resultado)
}

function promedioDeTresNumeros(){
    alert('Vamos a hacer el promedio de 3 números');
    let a = parseInt(prompt("ingresa el primer valor")) 
    let b = parseInt(prompt("ingresa el segundo valor")) 
    let c = parseInt(prompt("ingresa el tercer valor"))
    
    let suma1 = suma(a,b)
    let sumatotal = suma(suma1,c)

    dividir(sumatotal,3);

    console.log(resultado)
}



function continuar(){
    
    let deseaContinuar = parseInt (prompt(`¿Deseas Continuar? (ingresa el numero de la opcion)
        1: Si
        2: No`
    ));

    if (deseaContinuar === 1){
        validador = true

        operacion = undefined
        resultado = undefined

    } else if(deseaContinuar === 2){
        validador = false
    } else{
        alert("dato incorrecto ingresa otro valor")
        continuar();
    }
}




