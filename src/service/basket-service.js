let commandLines = []

const load = () => {
  const localCommandLines = window.localStorage.getItem('commandLines')
  if (localCommandLines) {
    commandLines = JSON.parse(localCommandLines)
  }

  afterChanged()
}

const afterChanged = () => {
  persist()
}

const persist = () => {
  console.log('Persist in localstorage')
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

  afterChanged()
}

const removeBook = item => {
  const index = commandLines.findIndex(b => b.isbn === item.isbn)

  commandLines.splice(index, 1)

  afterChanged()
}

const getItems = () => commandLines

const getTotal = () =>
  commandLines
    .map(item => item.price * item.quantity)
    .reduce((ac, v) => ac + v, 0)

load()

export default {
  addBook,
  removeBook,
  getItems,
  getTotal,
  persist
}
