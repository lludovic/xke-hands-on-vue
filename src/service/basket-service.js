const commandLines = []

const addBook = book => {
  const currentItem = commandLines.find(b => b.isbn === book.isbn)
  if (!currentItem) {
    commandLines.push(Object.assign(book, {quantity: 1}))
    console.log('book added to basket, ', commandLines)
  } else {
    currentItem.quantity++
  }
}

export default {
  addBook
}
