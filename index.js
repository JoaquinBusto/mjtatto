//Bienvenido
//Edad-> Seleccion mes -> fecha y hora
//cantidad-> stock -> precio total
let datoMes = "Abril"
let datoMesB = "Mayo"
let datoMesC = "junio"
let nombre 
let edad 
let fecha
function bienvenido(){
    nombre = prompt("Ingrese su nombre")
    console.log(`hola ${nombre}`)
}

function preguntarEdad(){
    edad = prompt(`Hola ${nombre}!, ¿cual es tu edad?`)
}
function fechaTurno(){
     prompt(`Seleccione mes\n ${datoMes}\n ${datoMesB}\n ${datoMesC}`)
}
function dia(){
    prompt(`¿Que fecha desea? ${fecha}`)
}
function fechaHorario(){
    prompt(`¿Que horario? ${horario}`)
}

while(!nombre){bienvenido()}
if(!edad){
    preguntarEdad()
}
if(edad && edad >= 18){
    alert("Accediste a la pagina")
    fechaTurno()
}
if(!fecha > 0){
    alert("Recuerde que nuestro horario de atencion es de 9:00 hs a 20:00 hs")

}

