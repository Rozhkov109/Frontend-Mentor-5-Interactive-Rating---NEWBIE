const numberButtons = document.querySelectorAll(".rating-number-button")
const submitButton = document.getElementById("submit-button")

function CleanButtons() {
  numberButtons.forEach((button) => {
    button.style.backgroundColor = "hsl(214,19%,21%)"
    button.style.color = "hsl(21,12%,63%)"
    button.classList.remove("active")
  })
}

function DrawNumberButton() {
  CleanButtons()
  if (!this.classList.contains("active")) {
    this.style.backgroundColor = "hsl(25,97%,53%)"
    this.style.color = "hsl(0,0%,100%)"
    this.classList.add("active")
  } else {
    this.style.backgroundColor = "hsl(214,19%,21%)"
    this.style.color = "hsl(21,12%,63%)"
    this.classList.remove("active")
  }
}

function DrawSubmitButton() {
  this.style.backgroundColor = "hsl(0,0%,100%)"
  this.style.color = "hsl(25,97%,53%)"
}

function ClearSubmitButton() {
  this.style.backgroundColor = "hsl(25,97%,53%)"
  this.style.color = "hsl(0,0%,100%)"
}

function Submit() {
  numberButtons.forEach((button, index) => {
    if (button.classList.contains("active")) {
      document.getElementById("thank-you-selected-rating").innerHTML = index + 1
      document.getElementById("thank-you-wrapper").style.display = "block"
      document.getElementById("rating-wrapper").style.display = "none"
    }
  })
}

numberButtons.forEach((button) => {
  button.addEventListener("click", DrawNumberButton)
})

submitButton.addEventListener("mousedown", DrawSubmitButton)
submitButton.addEventListener("mouseup", ClearSubmitButton)
submitButton.addEventListener("click", Submit)
