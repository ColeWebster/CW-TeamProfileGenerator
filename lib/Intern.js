const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name,id,email,university) {
        super(name,id,email);
        this.university = university;
    }
     
    getRole() {
        return "Intern"
    }
        
    getUni() {
        return this.uni;
    }
}

module.exports = Intern;