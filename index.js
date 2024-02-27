const numberButtons = document.querySelectorAll(".start-number-button")

function CleanButtons() {
  numberButtons.forEach((button) => {
    button.style.backgroundColor = "hsl(214,19%,21%)"
    button.style.color = "hsl(21,12%,63%)"
  })
}

function DrawNumberButton() {
  CleanButtons()
  if (this.style.backgroundColor != "hsl(25,97%,53%)") {
    this.style.backgroundColor = "hsl(25,97%,53%)"
    this.style.color = "hsl(0,0%,100%)"
  } else {
    this.style.backgroundColor = "hsl(214,19%,21%)"
    this.style.color = "hsl(21,12%,63%)"
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", DrawNumberButton)
})
