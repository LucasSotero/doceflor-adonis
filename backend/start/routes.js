'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
Route
  .group(() => {
    Route.get('/', () => ({ msg: 'this is the api doceflor version 1.0' }))
    Route.post('/register', 'UserController.register')
    Route.post('/login', 'UserController.login')
  })
  .prefix('/api/v1')


Route.resource('/clients', 'ClientController').apiOnly()
Route.resource('/payments', 'PaymentController').apiOnly()
Route.resource('/products', 'ProductController').apiOnly()
Route.get('/test', 'UserController.test').middleware('auth:jwt')