const routes = (app) => {
    // Get all books
    app.route('/books')
        .get((req, res) => {})

    app.route('/book')
        // Add or update book
        .post((req, res) => {})

    app.route('/book/:isbn')
        // Get book by isbn
        .get((req, res) => {})
        // Delete book by isbn
        .delete((req, res) => {})
}
 
export default routes;
