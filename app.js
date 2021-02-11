function Counter(element, time) {
  this.element = element
  this.time = time
  this.resetBtn = element.querySelector('.reset')
  this.increaseBtn = element.querySelector('.increase')
  this.decreaseBtn = element.querySelector('.decrease')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.textContent = this.time
}

Counter.prototype.reset = function () {
  this.value = 0
  this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function () {
  this.value--
  this.valueDOM.textContent = this.value
}
Counter.prototype.increase = function () {
  this.value++
  this.valueDOM.textContent = this.value
}

function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(`There is no such "${selection}" element`)
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)
