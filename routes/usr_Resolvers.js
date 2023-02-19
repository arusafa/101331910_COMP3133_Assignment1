const usr_model = require("../models/user_model");


const usr_resolvers = {
  Query: {
    helloUser: () => "Hello world! from Safa - Aru - User model",

    getUsers: async () => {
      const users = await usr_model.find();
      return users;
    },
    getUserById: async (_, { id }) => {
      const user = await usr_model.findById(id);
      return user;
    },
    loginUser: async (_, { input }) => {
      const user = await usr_model(input);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    logoutUser: async (_, { input }) => {
      const user = await usr_model(input);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }
  },
  Mutation: {
    registerUser: async (_, { input }) => {
      const newUser = new usr_model(input);
      await newUser.save();
      console.log(newUser + "\nUser created successfully");
      return newUser;
    },
  },
};

module.exports = usr_resolvers;

