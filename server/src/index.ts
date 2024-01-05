import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import helmet from "helmet";
import { resolvers, typeDefs } from "./api/graphql";

(async () => {
	// const typeDefs = `#graphql
	// # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	// # This "Book" type defines the queryable fields for every book in our data source.
	// 	type Book {
	// 	title: String
	// 	author: String
	// 	}
	// 	# type Author {
	// 	# 	id: ID!
	// 	# 	fullName: String!
	// 	# 	email: String!
	// 	# }


	// 	type Query {
	// 	books: [Book]
	// 	# getAuthors: [Author]
	// 	# getAuthorById(id: ID!): Author
	// 	}
	// `;

	const books = [
		{
			title: "The Awakening",
			author: "Kate Chopin",
		},
		{
			title: "City of Glass",
			author: "Paul Auster",
		},
	];

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

	// const resolvers = {
	// 	Query: {
	// 		books: () => books,
	// 		// getAuthors: () => {
	// 		// 	return authors;
	// 		// },
	// 		// getAuthorById: (parent, args, context, info) => {
	// 		// 	return authors;
	// 		// }
	// 	},
	// };

	const app = express();
	const httpServer = http.createServer(app);

	// The ApolloServer constructor requires two parameters: your schema
	// definition and your set of resolvers.
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		// plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});
	// Note you must call `start()` on the `ApolloServer`
	// instance before passing the instance to `expressMiddleware`
	await server.start();


	app.use("/graphql",
		express.json({}),
		express.urlencoded({ extended: true }),
		helmet({ contentSecurityPolicy: false }),
		expressMiddleware(server));

	await new Promise<void>((resolve) =>
		httpServer.listen({ port: 4000 }, resolve)
	);

	console.log(`🚀 Server ready at http://localhost:4000`);
	console.log(`🚀 Test ready at http://localhost:4000/graphql`);
})();
