'use strict'
const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index ({ request, response, view }) {
    const products = await Product.all()
    return response.status(200).send({msg:'success', products})
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   */
  async store ({ request, response }) {
    const {name, barCode, value} = request.all()
    const product = await new Product()
    product.name = name
    product.barCode = barCode
    product.value = value
    await product.save()
    return response.status(200).send({msg: 'success', product})
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show ({ params, request, response, view }) {
    const product = await Product.findOrFail(params.id)
    return response.status(200).send(product)
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   */
  async update ({ params, request, response }) {
    const {name, barCode, value} = request.all()
    const product = await Product.findOrFail(params.id)
    product.name = name
    product.barCode = barCode
    product.value = value
    await product.save()
    return response.status(200).send(product)    
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.status(200).send({msg: 'success'})
  }
}

module.exports = ProductController
