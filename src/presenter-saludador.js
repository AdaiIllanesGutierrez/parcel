/*import sumar from "./sumador";
import multiplicar from "./multiplicador";*/

const nombre= document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const nombre = Text.Text(first.value);

  div.innerHTML = "HOLA " + nombre.value;
});
