/*import sumar from "./sumador";
import multiplicar from "./multiplicador";*/

const nombre= document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const genero= document.querySelector("#genero");
const edad= document.querySelector("#edad");
const idioma= document.querySelector("#idioma");
//const form2 = dcument.querySelector("#sa-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  var gen;
  var gen2;
  if(genero.value =="femenino" && edad.value >=30){
    gen="SRA.";
    gen2="Ms.";
  }
  if(genero.value =="masculino" && edad.value >=30){
    gen="SR.";
    gen2="Mrs.";
  } 
  if (edad.value<30){
    genero.value="";
  }
  // crea un nuevo objeto `Date`
var today = new Date();
// obtener la fecha y la hora
var now = today.getHours();
var now2;
var hora=parseInt(now);
if (hora>=0 && hora <12){
now=" Buenos Dias";
now2="Good Morning";
}if(hora >=12 && hora <19){
  now= "Buenas Tardes"
  now2="Good Afternoon";
}
if(hora >=19 && hora <24){
  now= "Buenas Noches";
  now2="Good Night";
  
}
if(idioma.value =="es"){
  div.innerHTML = "Hola" + " "+ gen + " " + nombre.value + " " + now  ;
}
if(idioma.value =="en"){
  div.innerHTML = "Hello" + " "+ gen2+ " " + nombre.value + " " + now2  ;
}


console.log(now);

  
});
