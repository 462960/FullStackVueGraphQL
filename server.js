const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    todosList: [Todo]
  }
`;

const server = new ApolloServer({
  typeDefs
});

// By default server listening localhost:4000 but we can change to any by listen(any)
server.listen().then(({ url }) => console.log(`Server listening on ${url}`));
