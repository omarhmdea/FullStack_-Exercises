
let calculator = {

    add : function add(num1, num2) {
        return num1 + num2
    },

    subtract : function subtract(num1, num2) {
        return num1 - num2
    }

}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42