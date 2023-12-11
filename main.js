// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", clickEnter)

// Funções
function handleTryClick(event) {
  //callback
  event.preventDefault() // Evita o comportamento padrão do botão

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) > 10 && Number(inputNumber.value) < 0) {
    alert("Digite um número entre 0 e 10")
    return
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector(
      "h2"
    ).innerText = `Você acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
  console.log(xAttempts)
}

function handleResetClick() {
  //callback
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function clickEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick(event)
  }
}