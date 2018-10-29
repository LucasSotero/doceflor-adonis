'use strict'

const Schema = use('Schema')

class RecepitSchema extends Schema {
  up () {
    this.create('recepits', (table) => {
      table.increments()
      table.integer('sale_id')
        .unsigned()
        .references('id')
        .inTable('sales')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('payment_id').unsigned().references('id').inTable('payments')
      table.decimal('value').notNullable()
      table.date('dueAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('recepits')
  }
}

module.exports = RecepitSchema
