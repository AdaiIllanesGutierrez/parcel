/*import sumar from "./sumador";
import multiplicar from "./multiplicador";*/

const nombre= document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const genero= document.querySelector("#genero");
const edad= document.querySelector("#edad");
//const form2 = dcument.querySelector("#sa-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  if(genero.value =="femenino" && edad.value >=30){
    genero.value="SRA.";
  }
  if(genero.value =="masculino" && edad.value >=30){
    genero.value="SR.";
  } 
  if (edad.value<30){
    genero.value="BIENVENIDO";
  }
  // crea un nuevo objeto `Date`
var today = new Date();
// obtener la fecha y la hora
var now = today.getHours();
var hora=parseInt(now);
if (hora>=0 && hora <12){
now=" Buenos Dias"
}if(hora >=12 && hora <7){
  now= "Buenas Tardes"
}
if(hora >=7 && hora <24){
  now= "Buenas Tardes"
}

console.log(now);

  div.innerHTML = "HOLA" + " "+ genero.value + " " + nombre.value + " " + now  ;
});
