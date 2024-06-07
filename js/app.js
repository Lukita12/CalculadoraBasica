let operacion = pedirOp('Ingrese que operación desea realizar'); 
let numero1 = pedirNum('Ingrese el valor del numero 1'); 
let numero2 = pedirNum('Ingrese el valor del numero 2');

while(operacion != '0') {
    switch(operacion){
        case 'suma': 
            suma(numero1, numero2);
            break;
        case 'resta': 
            resta(numero1, numero2);
            break;
        case 'multiplicacion': 
            multiplicacion(numero1, numero2);
            break;
        case 'division': 
            division(numero1, numero2);
            break;
        default:
            console.log('Ingrese una operación válida');
    }   
    operacion = pedirOp('Que operacion desea realizar ahora?');
    if(operacion != '0') {
        numero1 = pedirNum('Ingrese el valor del numero 1'); 
        numero2 = pedirNum('Ingrese el valor del numero 2'); 
    }
}

function pedirOp(msg) {
   let operacion = prompt(msg);
   return validarOp(operacion);
}

function validarOp(op) {
    if(op === 'suma' || op === 'resta' || op === 'multiplicacion' || op === 'division' || op === '0'){
        return op;
    } else {
        return pedirOp('Ingrese una operación válida - suma/resta/multiplicacion/division o 0 para finalizar');
    }
}

function pedirNum(msg){
    return parseInt(prompt(msg));
}

// =======================================================================

function suma(a, b){
    console.log(a + b);
}

function resta(a, b){
    console.log(a - b);
}

function multiplicacion(a, b){
    console.log(a * b);
}

function division(a, b){
    console.log(a / b);
}
