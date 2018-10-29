'use strict'
const Client = use('App/Models/Client')
/**
 * Resourceful controller for interacting with clients
 */
class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   */  
  //ok
  async index ({ response }) {
    const clients = await Client.query().with('addresses').with('phones').fetch()
    return response.status(200).send({msg:'success', clients})
  }

  /**
   * Render a form to be used for creating a new client.
   * GET clients/create
   */
  //ok
  async store ({ request, response }) {
    const {name, observetion, addresses, phones } = request.all()
    const client = new Client()
    client.name = name
    client.observetion = observetion
    await client.save()
    client.phones = await client.phones().createMany(phones)
    client.addresses = await client.addresses().createMany(addresses)
    return response.status(201).send(client)
  }

  /**
   * Display a single client.
   * GET clients/:id
   */
  //ok
  async show ({ params, request, response }) {
    const client = await Client.findOrFail(params.id)
    client.phones = await client.phones().fetch()
    client.addresses = await client.addresses().fetch()
    return response.status(302).send(client)
  }

  /**
   * Render a form to update an existing client.
   * GET clients/:id/edit
   */
  //ok
  async update ({ params, request, response }) {
    const {name, observetion } = request.all()
    const client = await Client.findOrFail(params.id)
    client.name = name
    client.observetion = observetion
    await client.save()
    return response.status(200).send(client)

  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   */
  //ok
  async destroy ({ params, request, response }) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
    return response.status(200).send({msg:'success'})
  }
}

module.exports = ClientController
