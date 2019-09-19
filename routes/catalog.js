var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/book');
var author_controller = require('../controllers/author');
var genre_controller = require('../controllers/genre');
var book_instance_controller = require('../controllers/bookinstance');

/**
 * @apiDefine UserError
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Thing not found.
 * @apiError 401 master access only.
 */

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).

/**
 * @api {post} /api/book Create book
 * @apiVersion 0.2.0
 * @apiName CreateBook
 * @apiGroup Book
 * @apiParam {String} title Title of the book (required)
 * @apiParam {String} author Author of the book (required)
 * @apiParam {String} summary Summary of the book (required)
 * @apiParam {String} isbn ISBN of the book (required)
 * @apiParam {String} [genre] Genre of the book
 * @apiSuccess {String} title Title of the book
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 OK
 * 
 * @apiUse UserError
 * @apiDescription This holds all record of books.
 */
router.get('/book/create', book_controller.book_create_get);

// POST request for creating Book.
router.post('/book/create', book_controller.book_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update', book_controller.book_update_get);

// POST request to update Book.
/**
 * @api {post} /api/book Update book
 * @apiVersion 0.2.0
 * @apiName UpdateBook
 * @apiGroup Book
 * @apiParam {ObjectId} recordId ID of the book (required)
 * @apiParam {String} title Title of the book (required)
 * @apiParam {String} author Author of the book (required)
 * @apiParam {String} summary Summary of the book (required)
 * @apiParam {String} isbn ISBN of the book (required)
 * @apiParam {String} [genre] Genre of the book
 * @apiSuccess {String} title Title of the book
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 OK
 * 
 * @apiUse UserError
 * @apiDescription This holds all record of books.
 */
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance. 
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;