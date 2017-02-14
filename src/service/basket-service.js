import BookService from './book-service'

let commandLines = []
let commandTotal = {
  total: 0,
  oldtotal: 0
}

const load = () => {
  const localCommandLines = window.localStorage.getItem('commandLines')
  if (localCommandLines) {
    commandLines = JSON.parse(localCommandLines)
  }

  afterChanged()
}

const afterChanged = () => {
  performTotal()
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

const performTotal = () => {
  const total = commandLines
    .map(item => item.price * item.quantity)
    .reduce((ac, v) => ac + v, 0)

  return BookService.getOffers(commandLines)
    .map(offer => {
      commandTotal = {
        total: offer(total),
        oldtotal: total
      }

      return commandTotal
    })
}

const getTotal = () => commandTotal

load()

export default {
  addBook,
  removeBook,
  getItems,
  getTotal,
  performTotal,
  persist
}
