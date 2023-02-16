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

  div.innerHTML = "HOLA" + " "+ genero.value + " " + nombre.value  ;
});
