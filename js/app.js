const d = document;
const $op1 = d.getElementById("op1");
const $op2 = d.getElementById("op2");
const $operadores = d.getElementById("operadores");
const $calcular = d.getElementById("calcular");
const $resultado = d.getElementById("resultado");

$calcular.addEventListener("click", calcular);

function calcular() {
  const operacion = $operadores.value;
  const op1 = parseFloat($op1.value);
  const op2 = parseFloat($op2.value);
  if (
    (operacion === "+" ||
      operacion === "-" ||
      operacion === "*" ||
      operacion === "/") &&
    !isNaN(op1) &&
    !isNaN(op2)
  ) {
    let resultado;
    switch (operacion) {
      case "+":
        resultado = op1 + op2;
        break;

      case "-":
        resultado = op1 - op2;
        break;

      case "*":
        resultado = op1 * op2;
        break;
      case "/":
        resultado = op1 / op2;
        break;
    }
    $resultado.style = "color:blarck";
    $resultado.innerText = `El resultado de la operacion es:  ${resultado}`;
  }else{
    $resultado.style = "color:red";
    $resultado.innerText = "La operacion es imposible";
  }
}
