/* Write your code below */

const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix {
    constructor() {
        super(0, 0)
    }
    loadData(salaryData) {
        let newMatrix = []
        for (const obj of salaryData) {
            newMatrix.push(Object.values(obj))
        }
        this.matrix = newMatrix
    }
    getEmployees(department) {

        let res = []
        for (const employee of this.matrix) {
            if (employee[2] == department) {
                res.push(employee[1])
            }
        }
        return res
    }
    getTotalSalary(department) {
        let res = 0
        for (const employee of this.matrix) {
            if (employee[2] == department) {
                res += employee[3]
            }
        }
        return res
    }
    findRichest(){
        let maxSalary  = -Infinity
        let nameOfEmployee = null

        for (const employee of this.matrix) {
            if (employee[3] > maxSalary) {
                maxSalary = employee[3]
                nameOfEmployee = employee[1]
            }
        }
        return nameOfEmployee
    }
}



//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()
console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix