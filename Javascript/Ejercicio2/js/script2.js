/*
/* Dado el sueldo de un empleado imprimir en una alerta el nuevo sueldo del empleado si tuvo un aumento del 10% */

const sueldo = prompt("Ingrese el valor del sueldo");
const psueldo = 10 / 100;
const nsueldo = parseInt(sueldo) + parseInt(sueldo * psueldo);
alert("El nuevo sueldo con el aumento es: "+nsueldo); 


/* Ejercicio 3 - Un vendedor que tiene su sueldo base, recibe una comisión del 30% del total de las ventas del mes, el quiere saber cuanto ganara en un mes que tuvo tres ventas */
const suel = prompt("Ingrese el valor del sueldo");
const venta1 = prompt("Ingrese el valor de la venta1");
const venta2 = prompt("Ingrese el valor de la venta2");
const venta3 = prompt("Ingrese el valor de la venta3");
const suma = parseInt(venta1) + parseInt(venta2) + parseInt(venta3);
alert("La suma de las 3 ventas del mes es: "+suma);

const psuel = 30 / 100;

/* Ejercicio 1 - */

const comp = prompt("Ingrese el valor de la compra");
const pcomp = 25 / 100;
const tcomp = parseInt(comp) - parseInt(comp * pcomp);
alert("El total de la compra es: "+tcomp);

/* Ejercicio 2 */

const inver = prompt("Ingrese el valor de la inversión");
const pinver = 2 / 100;
const multi = parseInt(inver * pinver);
const tinver = parseInt(inver) + parseInt(multi)
alert("El valor de la ganancia es: "+tinver); */


/* Ejercicio 3 */
const nota1 = prompt ("Ingrese la nota 1");
const nota2 = prompt ("Ingrese la nota 2");
const nota3 = prompt ("Ingrese la nota 3");
const prome = parseInt(nota1) + parseInt(nota2) + parseInt(nota3); 
const div = prome / 3;
alert("El promedio de las tres notas es: "+div);
const pprome = div / 100;
const pnot1 = 55 / 100;
const ppromenot1 = div * pnot1 
alert("El 55% de las 3 notas es: "+ppromenot1);

const nota4 = prompt("Ingrese la nota 4");
const pnot2 = 30 / 100;
const ppromenot2 = nota4 * pnot2
alert("El 30% del examen final es: "+ppromenot2);

const nota5 = prompt("Ingrese la nota 5");
const pnot3 = 15 / 100;
const ppromenot3 = nota5 * pnot3
alert("El 15% del trabajo final es: "+ppromenot3);

const nfinal = parseInt(ppromenot1) + parseInt(ppromenot2) + parseInt(ppromenot3);
const divi = nfinal / 3;
alert("Su calificación final es: "+divi);


/* Ejercicio 4 */
const prprod = prompt("Ingrese el precio del producto");
const pprod = 30 / 100;
const promp = prprod * pprod;
const preciv = parseInt(prprod) + parseInt(promp);
alert("El precio para vender su producto obtenido es: "+preciv);


/* Ejercicio 5 */
const kilom = 15000
const mins = 2000
const kilo = prompt("Ingrese el número de kilómetros recorridos");
const tkilo = kilom * kilo;
const mints = prompt("Ingrese el número de minutos recorridos");
const tmins = mins * mints;
const tmonto = parseInt(tkilo) + parseInt(tmins);
alert("El monto a pagar por la carrera es: "+tmonto);


/*Ejercicio 6 */
const num1 = prompt("Ingrese el número 1");
const cuad1 = num1 * num1;
alert("El cuadrado del número 1 es: "+cuad1);
const num2 = prompt("Ingrese el número 2");
const cuad2 = num2 * num2;
alert("El cuadrado del número 2 es: "+cuad2);
const num3 = prompt("Ingrese el número 3");
const cuad3 = num3 * num3;
alert("El cuadrado del número 3 es: "+cuad3);


/* Ejercicio 7 */
const presu = prompt("Ingrese el presupuesto anual del hospital");
const pgin = 40 / 100;
const prep1 = presu * pgin;
alert("El presupuesto que el hospital reparte a Ginecología es: "+prep1);
const ptra = 30 / 100;
const prep2 = presu * ptra;
alert("El presupuesto que el hospital reparte a Traumatología es: "+prep2);
const pped = 30 / 100;
const prep3 = presu * pped;
alert("El presupuesto que el hospital reparte a Pediatría es: "+prep3);


/* Ejercicio 8 */
const pers1 = prompt("Ingrese el valor del dinero invertido de la persona 1"); 
const pers2 = prompt("Ingrese el valor del dinero invertido de la persona 2");
const pers3 = prompt("Ingrese el valor del dinero invertido de la persona 3");
const sumapers = parseInt(pers1) + parseInt(pers2) + parseInt(pers3);
const tporce1 = pers1 * 100 ;
const divi1 = tporce1 / sumapers;
alert("El porcentaje de la inversión de la persona 1 es: "+divi1+ "%");
const tporce2 = pers2 * 100;
const divi2 = tporce2 / sumapers;
alert("El porcentaje de la inversión de la persona 2 es: "+divi2+ "%");
const tporce3 = pers3 * 100;
const divi3 = tporce3 / sumapers;
alert("El porcentaje de la inversión de la persona 3 es: "+divi3+ "%");





