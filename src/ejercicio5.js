let dia="Sabado";   // puede ser Lunes, Martes, Miércoles, Jueves, Viernes, Sábado o Domingo

if (dia === "Lunes" || dia === "Martes" || dia === "Miercoles" || dia === "Jueves" || dia === "Viernes") {
    console.log("Es un día laborale");
}
else if (dia === "Sabado" || dia === "Domingo") {
    console.log("Es un día de fin de semana");
}
else {
    console.log("Día no válido");
}