function saludo(nombre, apellido) {
return 'Hello ' + nombre + ' ' + apellido
}
console.log(saludo('Kevin', 'Ramirez'))

function suma(numeroUno, numeroDos) {
    return numeroUno + numeroDos
}
console.log(suma(3, 1))

function resta(numeroUno, numeroDos) {
    return numeroUno - numeroDos
}
console.log(resta(4, 2))

function multiplicacion(numeroUno, numeroDos) {
    return numeroUno * numeroDos
}
console.log(multiplicacion(4, 2))

function division(numeroUno, numeroDos) {
    return numeroUno / numeroDos
}
console.log(division(6, 2))

function esMayor(numeroUno, numeroDos) {
    if (numeroUno > numeroDos) {
        return numeroUno
    } else {
       return numeroDos
    }
}
console.log(esMayor(3, 7))
