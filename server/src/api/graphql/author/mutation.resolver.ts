const Mutation = {
	addAuthor: (parent, args, context, info) => {
		console.log("parent ", parent);
		console.log("args ", args);
		return {
			id: 1,
			fullName: args.fullName,
			email: 'atuhro tep@gmai'
		}
	}
}

export { Mutation };