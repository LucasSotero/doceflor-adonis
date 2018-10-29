'use strict'

const Schema = use('Schema')

class ProductSaleSchema extends Schema {
  up () {
    this.create('product_sales', (table) => {
      table.increments()
      table.integer('sale_id')
        .unsigned()
        .references('id')
        .inTable('sales')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.decimal('value')
      table.decimal('discount')
      table.decimal('amount')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_sales')
  }
}

module.exports = ProductSaleSchema
