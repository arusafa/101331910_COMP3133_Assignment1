const emp_model = require("../models/Employee_model");

const emp_resolvers = {
  Query: {
    helloEmployee: () => "Hello world! from Safa - Aru - Employee model",

    getEmployees: async () => {
      const employees = await emp_model.find();
      return employees;
    },
    getEmployeeById: async (_, { id }) => {
        const emp = await emp_model.findById(id);
        return emp;
    },
},

  Mutation: {
    createEmployee: async (_, { input }) => {
      const newEmployee = new emp_model(input);
      await newEmployee.save();
      console.log(newEmployee + " \nEmployee created successfully");
      return newEmployee;
    },
    updateEmployee: async (_, { id, input }) => {
        const employee = await emp_model.findByIdAndUpdate(id, input, {
            new: true,
        });
        console.log(employee + " \nEmployee updated successfully");
        return employee;
        },
    deleteEmployee: async (_, { id }) => {
        const employee = await emp_model.findByIdAndDelete(id);
        console.log(employee + " \nEmployee deleted successfully");
        return employee;
        }
  },
};

module.exports = emp_resolvers;
