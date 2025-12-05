// ingresar notas
 const n1 = parseFloat(prompt("ingresar nota 1: "));
 const n2 = parseFloat(prompt("ingresar nota 2: "));
 const n3 = parseFloat(prompt("ingrear nota  3: "));

 //sumar notas y dividir entre la cantidad
 const promedio = ( n1 + n2 + n3 ) / 3; 


 //mensaje respecto al resultado 
 let mensaje = ""; 
 
// solo números validos 

if (
    isNaN(n1) ||  isNaN(n2) ||  isNaN(n3) ||
    n1 < 1 ||  n1 > 7 ||  
    n2 < 1 ||  n2 > 7 ||
    n3 < 1 ||  n3 > 7 
   ){mensaje = " las notas deben ser números entre 1.0 y 7.00";

// las condiciones
   
 } else if (promedio >= 6.0) {
    mensaje = `!Excelente! tu promedio es: ${promedio.toFixed(1)} `;
 } else if (promedio >= 5.0) {
    mensaje = `!Sigue adelante!, puedes mejorar. tu promedio es:  ${promedio.toFixed(1)} `;
 } else if ( promedio >= 4.0) {
    mensaje = `tu promedio es :  ${promedio.toFixed(1)} debes esforzarte más`;

 } else {

    mensaje = `has reprobado con promedio  ${promedio.toFixed(1)}`;
 }


 // agregar la fecha y hora
 const fecha = new Date();
 const fechafinal = fecha.toLocaleString();

 mensaje += `\nfecha de evaluación: ${fechafinal} `;

//agregar mensaje con todas las notas ingresadas
 mensaje += `\nNotas ingresadas: ${n1}, ${n2}, ${n3}`;


if(promedio === 7.0 ){
   mensaje = "💯" + mensaje;
} else if (promedio >= 6.0 ){
   mensaje = "🤩" + mensaje;
} else if(promedio >= 5.0){
   mensaje = "😋" + mensaje;
} else if(promedio >= 4.0 ){
   mensaje = "😕" + mensaje;
} else if(promedio >= 3.0 ){
   mensaje = "😟" + mensaje;
} else if(promedio <= 2.0 )
   mensaje = "" + mensaje;





 document.write(mensaje);
 alert(mensaje);
 console.log(mensaje); 