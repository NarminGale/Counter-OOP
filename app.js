function Counter(element, time) {
  console.log(element, time)
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
