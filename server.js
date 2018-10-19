const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const User = require("./models/User");
const Post = require("./models/Post");

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.log(`Error ${err}`));

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
  typeDefs,
  context: {
    User,
    Post
  }
});

// By default server listening localhost:4000 but we can change to any by listen(any)
server.listen().then(({ url }) => console.log(`Server listening on ${url}`));
