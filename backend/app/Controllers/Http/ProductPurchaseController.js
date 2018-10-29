'use strict'

/**
 * Resourceful controller for interacting with productpurchases
 */
class ProductPurchaseController {
  /**
   * Show a list of all productpurchases.
   * GET productpurchases
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new productpurchase.
   * GET productpurchases/create
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single productpurchase.
   * GET productpurchases/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing productpurchase.
   * GET productpurchases/:id/edit
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a productpurchase with id.
   * DELETE productpurchases/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductPurchaseController
