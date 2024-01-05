import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	return knex("author").del().then(() => {
		return knex("author").insert([
			{
				id: 1,
				fullName: 'author 1',
				email: 'a1@gmail.com'
			}, {
				id: 2,
				fullName: 'author 2',
				email: 'a2@gmail.com'
			}, {
				id: 3,
				fullName: 'author 3',
				email: 'a3@gmail.com'
			}
		]);
	});
};
