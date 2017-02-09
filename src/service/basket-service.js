let commandLines = []

const load = () => {
  const localCommandLines = window.localStorage.getItem('commandLines')
  if (localCommandLines) {
    commandLines = JSON.parse(localCommandLines)
  }
}

const persist = () => {
  window.localStorage.setItem('commandLines', JSON.stringify(commandLines))
}

const addBook = book => {
  const currentItem = commandLines.find(b => b.isbn === book.isbn)

  if (!currentItem) {
    commandLines.push(Object.assign(book, {quantity: 1}))
    console.log('book added to basket, ', commandLines)
  } else {
    currentItem.quantity++
  }

  persist()
}

const getItems = () => commandLines

const getTotal = () =>
  commandLines
    .map(item => item.price * item.quantity)
    .reduce((ac, v) => ac + v, 0)

load()

export default {
  addBook,
  getItems,
  getTotal
}
