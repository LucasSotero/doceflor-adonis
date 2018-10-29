'use strict'

const Model = use('Model')

class Sale extends Model {
    client(){ 
        return this.hasOne('App/Models/Client')
    }
    recepits(){
        return this.hasMany('App/Models/Recepit')
    }
    products(){
        return this.belongsToMany('App/Models/Product').pivotModel('App/Models/ProductSale')
    }
}

module.exports = Sale
