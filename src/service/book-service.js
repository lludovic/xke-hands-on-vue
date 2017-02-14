import { http } from '../utils'

const getBooks = () => http.get('http://henri-potier.xebia.fr/books')
  .map(data => data.body)

const calculateBestOffer = offers => price => {
  return price
}

const getOffers = books => {
  const isbns = books.map(b => b.isbn).join(',')

  return http.get(`http://henri-potier.xebia.fr/books/${isbns}/commercialOffers`)
    .map(data => calculateBestOffer(data.body))
}

export default {
  getBooks,
  getOffers
}
