const { ApolloServer, gql } = require("apollo-server");

const todos = [
  { task: "Wash", completed: false },
  { task: "Sell", completed: false }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    todosList: [Todo]
  }

  type Mutation {
    addTodo(task: String, completed: Boolean): Todo
  }
`;

const resolvers = {
  Query: {
    todosList: () => todos
  },

  Mutation: {
    addTodo: (_, { task, completed }) => {
      const todo = { task, completed };
      todos.push(todo);
      return todo;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// By default server listening localhost:4000 but we can change to any by listen(any)
server.listen().then(({ url }) => console.log(`Server listening on ${url}`));
