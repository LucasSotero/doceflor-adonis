'use strict'
const Sale = use('App/Models/Sale')
/**
 * Resourceful controller for interacting with sales
 */
class SaleController {
  /**
   * Show a list of all sales.
   * GET sales
   */
  async index ({ request, response, view }) {
    const sales = await Sale.all()
    return response.status(200).send({msg: 'success', sales})
  }

  /**
   * Render a form to be used for creating a new sale.
   * GET sales/create
   */
  async store ({ request, response }) {
    const {discont} = await request.all()
    const sale = await new Sale()
    sale.discont = discont
    await sale.save()
    return response.status(200).send({sale})
  }

  /**
   * Display a single sale.
   * GET sales/:id
   */
  async show ({ params, request, response, view }) {
    const sale = await sale.findOrfail(params.id)
    return response.status(200).send({sale})

  }

  /**
   * Render a form to update an existing sale.
   * GET sales/:id/edit
   */
  async update ({ params, request, response }) {
    const {discont} = await request.all()
    const sale = await Sale.findOrfail(params.id)
    sale.discont = discont
    await sale.save()
    return response.status(200).send({sale})
  }

  /**
   * Delete a sale with id.
   * DELETE sales/:id
   */
  async destroy ({ params, request, response }) {
    const sale = await Sale.findOrfail(params.id)
    await sale.delete()
    return response.status(200).send({msg: 'success'})
  }
}

module.exports = SaleController
