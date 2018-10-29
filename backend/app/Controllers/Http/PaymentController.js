'use strict'
const Payment = use('App/Models/Payment')

/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {
  /**
   * Show a list of all payments.
   * GET payments
   */
  async index ({ request, response, view }) {
    const payments = await Payment.all()
    return response.status(200).send({msg:'success', payments})
  }

  /**
   * Render a form to be used for creating a new payment.
   * GET payments/create
   */
  async store ({ request, response }) {
    const {description, due} = request.all()
    const payment = await new Payment()
    payment.description = description
    payment.due = due
    await payment.save()
    return response.status(200).send({msg: 'success', payment})
  }

  /**
   * Display a single payment.
   * GET payments/:id
   */
  async show ({ params, request, response, view }) {
    const payment = await Payment.findOrFail(params.id)
    return response.status(200).send(payment)
  }

  /**
   * Render a form to update an existing payment.
   * GET payments/:id/edit
   */
  async update ({ params, request, response }) {
    const {description, due} = request.all()
    const payment = await Payment.findOrFail(params.id)
    payment.description = description
    payment.due = due
    await payment.save()
    return response.status(200).send(payment)    
  }

  /**
   * Delete a payment with id.
   * DELETE payments/:id
   */
  async destroy ({ params, request, response }) {
    const payment = await Payment.findOrFail(params.id)
    await payment.delete()
    return response.status(200).send({msg: 'success'})
  }
}

module.exports = PaymentController
