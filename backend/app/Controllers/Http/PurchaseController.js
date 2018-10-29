'use strict'

/**
 * Resourceful controller for interacting with purchases
 */
class PurchaseController {
  /**
   * Show a list of all purchases.
   * GET purchases
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new purchase.
   * GET purchases/create
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single purchase.
   * GET purchases/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing purchase.
   * GET purchases/:id/edit
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a purchase with id.
   * DELETE purchases/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PurchaseController
