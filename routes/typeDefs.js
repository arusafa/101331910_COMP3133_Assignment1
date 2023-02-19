const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String!
    email: String!
    password: String!
    token: String!
  }
  type Employee {
    id: ID
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: String!
  }
  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: String!
  }
  type Query {
    helloUser: String
    helloEmployee: String
    getUsers: [User]
    getUserById(id: ID!): User
    getEmployees: [Employee]
    getEmployeeById(id: ID!): Employee
    loginUser(input: UserInput): User
    logoutUser(input: UserInput): User
    
  }
  type Mutation {
    registerUser(input: UserInput): User
    createEmployee(input: EmployeeInput): Employee
    updateEmployee(id: ID!, input: EmployeeInput): Employee
    deleteEmployee(id: ID!): Employee
  }
`;

module.exports = typeDefs;

/*
mutation{
  createEmployee (
    input:{
      first_name:"maziar",
      last_name:"masuidi",
      email:"maziar@it.ca",
      gender:"Male",
      salary:"60000"
    }){
      id
      first_name
      last_name
      email
      gender
      salary
    }
}
*/

/*
mutation {
  registerUser(
    input: {
      username: "maziarMasuidi"
      email: "masuidi@maziar.net"
      password: "123456"
    }
  ) {
    id
    username
    email
    password
  }
}
*/

/*
query{
  getEmployees{
    id
    first_name
    last_name
  }
}

query {
  getUsers {
    id
    username
    email
    password
  }
}

*/

//login user query
/*
query{
  loginUser(
    input:{
      username:""
      email:""
      password:""
    }
  ){
    id
    username
    email
    password
  }
}

/*
mutation{
    updateEmployee(
        id:"63dcc5dafee0e8d746b8d143"
        input:{
            first_name:"maziar",
            last_name:"masuidi",
            email:"Maziar.masuidi@gmail.ca",
            gender:Male,
            salary:80000
        }
    ){
        id
        first_name
        last_name
        email
        gender
        salary
    }
}
*/

/*
mutation{
    deleteEmployee(
        id:"63dcc5dafee0e8d746b8d143"
    ){
        id
        first_name
        last_name
        email
        gender
        salary
    }
}
*/

/*
query{
    getEmployeeById(id:"63dcc5dafee0e8d746b8d143"){
        id
        first_name
        last_name
        email
    }
}
*/

/*
query{
    getUserById(id:"63dcc5dafee0e8d746b8d143"){
        id
        username
        email
    }
}

Mutation{
    loginUser(
        input:{
            email:"masuidi@maziar.net"
            password:"
        }
    ){
        id
        username
        email
        token
    }
}
*/