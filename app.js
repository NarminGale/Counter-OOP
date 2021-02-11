function Counter(element, time) {
  this.element = element
  this.time = time
  this.resetBtn = element.querySelector('.reset')
  this.increaseBtn = element.querySelector('.increase')
  this.decreaseBtn = element.querySelector('.decrease')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.textContent = this.time

  //bind this to all functions
  this.reset = this.reset.bind(this)
  this.increase = this.increase.bind(this)
  this.decrease = this.decrease.bind(this)

  this.resetBtn.addEventListener('click', this.reset)
  this.increaseBtn.addEventListener('click', this.increase)
  this.decreaseBtn.addEventListener('click', this.decrease)
}

Counter.prototype.reset = function () {
  this.time = 0
  this.valueDOM.textContent = this.time
}
Counter.prototype.decrease = function () {
  this.time--
  this.valueDOM.textContent = this.time
}
Counter.prototype.increase = function () {
  this.time++
  this.valueDOM.textContent = this.time
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
