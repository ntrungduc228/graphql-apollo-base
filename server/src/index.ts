import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import helmet from "helmet";
import { resolvers, typeDefs } from "./api/graphql";

const PORT = Number(process.env.NODE_PORT) || 4000;

(async () => {
	const app = express();
	const httpServer = http.createServer(app);

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
		httpServer.listen({ port: PORT }, resolve)
	);

	console.log(`🚀 Server ready at http://localhost:${PORT}`);
	console.log(`🚀 Test ready at http://localhost:${PORT}/graphql`);
})();
