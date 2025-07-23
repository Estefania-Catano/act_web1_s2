let a = 10;
let b = 3;
let operador = '*';   // puede ser + - * /

switch (operador) {
    case '+':
        console.log("Resultado: " + (a + b));
        break;
    case '-':
        console.log("Resultado: " + (a - b));
        break;
    case '*':
        console.log("Resultado: " + (a * b));
        break;
    case '/':
        if (b !== 0) {
            console.log("Resultado: " + (a / b));
        }
        else {
            console.log("Error: División por cero no permitida");
        }
        break;
    default:
        console.log("Operador no válido");
        break;
    }