const authors = [{
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
}]

const Query = {
	getAuthors: () => {
		return authors;
	},

	getAuthorById: (parent, args, context, info) => {
		return authors;
	}
};

export { Query };