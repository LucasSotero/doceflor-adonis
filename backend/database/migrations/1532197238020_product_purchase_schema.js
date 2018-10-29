'use strict'

const Schema = use('Schema')

class ProductPurchaseSchema extends Schema {
  up () {
    this.create('product_purchases', (table) => {
      table.increments()
      table.integer('purchase_id')
        .unsigned()
        .references('id')
        .inTable('purchases')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('amount')
      table.decimal('value')

      table.timestamps()
    })
  }

  down () {
    this.drop('product_purchases')
  }
}

module.exports = ProductPurchaseSchema
