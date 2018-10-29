'use strict'

const Model = use('Model')

class Purchase extends Model {
    products (){
        return this.hasMany('App/Models/ProductPurchase')
    }
}

module.exports = Purchase
