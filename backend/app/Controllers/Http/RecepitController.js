'use strict'

/**
 * Resourceful controller for interacting with recepits
 */
class RecepitController {
  /**
   * Show a list of all recepits.
   * GET recepits
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new recepit.
   * GET recepits/create
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single recepit.
   * GET recepits/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing recepit.
   * GET recepits/:id/edit
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a recepit with id.
   * DELETE recepits/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = RecepitController
