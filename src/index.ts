import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { buildSchema } from "type-graphql";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [],
    validate: false,
    emitSchemaFile: "./schema.graphql",
  });

  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();
  app.use("/graphql", express.json(), expressMiddleware(server));

  app.listen({ port: 4000 }, () => "Servidor iniciado na porta 4000 🚀");
}
bootstrap();

