import { http } from '../utils'

const getBooks = () => http.get('http://henri-potier.xebia.fr/books')
  .map(data => data.body)

export default {
  getBooks
}
