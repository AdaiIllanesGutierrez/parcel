import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const uno = document.querySelector("#numero1");
const dos= document.querySelector("#numero2");
const form2 = document.querySelector("#multiplicar-form");
const div2 = document.querySelector("#resultado-div2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(uno.value);
  const secondNumber = Number.parseInt(dos.value);

  div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});