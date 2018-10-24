const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Import typeDefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// Import environment variable and mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MLab data base
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.log(`Error ${err}`));

// Create Apollo/GraphQL server using typeDefs, resolvers and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

// By default server listening localhost:4000 but we can change to any by listen(any)
server.listen().then(({ url }) => console.log(`Server listening on ${url}`));
