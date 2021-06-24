// Reference employee
const { moduleExpression } = require('@babel/types');
const Employee = require('./Employee');

// Class 'Manager'
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    // Method to get role
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}    

// Export model
module.exports = Manager;