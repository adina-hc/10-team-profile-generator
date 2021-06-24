// Call employee file
const Employee = require('./Employee');

// Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

// Export Engineer module
module.exports = Engineer;