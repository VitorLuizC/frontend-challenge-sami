import pkg from '../package.json';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      version: String!
    }
  `,
  resolvers: {
    Query: {
      version: () => pkg.version,
    },
  },
});

server.applyMiddleware({
  app,
  cors: {
    origin: [
      'http://localhost:3001',
      'https://localhost:3001',
      'http://127.0.0.1:3001',
      'https://127.0.0.1:3001',
    ],
  },
  bodyParserConfig: true,
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
