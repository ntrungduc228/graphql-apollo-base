import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.dropTableIfExists('author')
		.createTable('author', function (table) {
			table.increments('id').primary();
			table.string('fullName', 100).notNullable();
			table.string('email', 100).notNullable();
			table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
			table.timestamp('deletedAt').nullable();
		});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('author');
}

