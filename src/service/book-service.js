const getBooks = () => window.fetch('http://henri-potier.xebia.fr/books')
  .then(r => r.json())

export default {
  getBooks
}
