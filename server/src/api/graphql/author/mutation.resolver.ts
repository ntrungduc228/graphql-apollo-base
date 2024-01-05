const Mutation = {
	addAuthor: (parent, args, context, info) => {
		console.log("parent ", parent);
		console.log("args ", args);
		console.log("context ", context);
		console.log("info ", info);
		return {
			id: 1,
			fullName: 'author 1',
			email: 'atuhro tep@gmai'
		}
	}
}

export { Mutation };