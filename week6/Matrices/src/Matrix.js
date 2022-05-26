/* Write your code below */
class Matrix {
    constructor(rowNum, colNum) {
        this.rowNum = rowNum
        this.colNum = colNum
        this.matrix = this.generateMatrix()
    }
    generateMatrix() {
        let counter = 1
        let rowList = []
        let colList = []
        for (let i = 0; i < this.rowNum; i++) {
            rowList = []
            for (let j = 0; j < this.colNum; j++) {
                rowList.push(counter++)
            }
            colList.push(rowList)
        }
        return colList
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let printRow = ''
            for (let j = 0; j < this.matrix[i].length; j++) {
                printRow += `${this.matrix[i][j]}   `
            }
            console.log(printRow);
            console.log('');
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    alter(rowNum, colNum, data) {
        this.matrix[rowNum][colNum] = data
    }
    printColumn(colNum) {
        for (let i = 0; i < this.rowNum; i++) {
            console.log(this.matrix[i][colNum]);
        }
    }
    printRow(rowNum) {
        for (let i = 0; i < this.colNum; i++) {
            console.log(this.matrix[rowNum][i]);
        }
    }
    findCoordinate(value) {
        for (let i = 0; i < this.rowNum; i++) {
            for (let j = 0; j < this.colNum; j++) {
                if (this.matrix[i][j] === value) {
                    return { x: j, y: i }
                }
            }
        }
    }
}



//You can paste the code from the lesson below to test your solution

// let m = new Matrix(3, 4)
// m.print()
// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}


/* Do not remove the exports below */
module.exports = Matrix