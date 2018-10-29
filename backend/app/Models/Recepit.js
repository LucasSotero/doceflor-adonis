'use strict'

const Model = use('Model')

class Recepit extends Model {
    sale (){
        return this.belongsTo('App/Models/Sale')
    }
}

module.exports = Recepit
