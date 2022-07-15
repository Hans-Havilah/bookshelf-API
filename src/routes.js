const {
  saveBook, getAllBooks, getBooksById, editBooksById, deleteBooks,
} = require('./handler');

const routes = [{
  method: 'POST',
  path: '/books',
  handler: saveBook,
}, {
  method: 'GET',
  path: '/books',
  handler: getAllBooks,
}, {
  method: 'GET',
  path: '/books/{bookId}',
  handler: getBooksById,
}, {
  method: 'PUT',
  path: '/books/{bookId}',
  handler: editBooksById,
}, {
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBooks,
}];

module.exports = routes;
