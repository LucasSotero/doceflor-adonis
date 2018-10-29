'use strict'

/**
 * Resourceful controller for interacting with productsales
 */
class ProductSaleController {
  /**
   * Show a list of all productsales.
   * GET productsales
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new productsale.
   * GET productsales/create
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single productsale.
   * GET productsales/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing productsale.
   * GET productsales/:id/edit
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a productsale with id.
   * DELETE productsales/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductSaleController
