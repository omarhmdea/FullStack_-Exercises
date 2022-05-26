const Matrix = require("./Matrix");
const ROW_SIZE = 3
const COL_SIZE = 3


class TicTacToe extends Matrix {
    constructor() {
        super(ROW_SIZE, COL_SIZE)
        this.gameOver = false
    }
    loadBoard() {
        for (let i = 0; i < ROW_SIZE; i++) {
            for (let j = 0; j < COL_SIZE; j++) {
                this.alter(i, j, '.')
            }

        }
    }
    play(rowNum, columnNum, player) {
        if (!this.gameOver && this.matrix[rowNum][columnNum] === '.'){
            player === 1 ? this.alter(rowNum, columnNum, 'X') : this.alter(rowNum, columnNum, 'O')

            if (this.checkIfWon()) {
                console.log(`Congratulations Player ${player}`)
                this.gameOver = true
                this.loadBoard()
            }
        } else {
            this.gameOver ? console.log("Game Finish :)") : console.log("Position has already been played") 
        }
    }
    checkIfWon() {
        return this.checkColumn() || this.checkRow() || this.checkMainDiameter() || this.checkSecandDiameter()
    }
    checkColumn() {
        let res = ''

        for (let i = 0; i < ROW_SIZE; i++) {
            res = ''
            for (let j = 0; j < COL_SIZE; j++) {
                res += this.matrix[j][i]
            }
            if (res == 'XXX' || res == 'OOO')
                return true
        }
        return false
    }
    checkRow() {
        let res = ''

        for (let i = 0; i < ROW_SIZE; i++) {
            res = ''
            for (let j = 0; j < COL_SIZE; j++) {
                res += this.matrix[i][j]
            }
            if (res == 'XXX' || res == 'OOO')
                return true
        }
        return false
    }
    checkMainDiameter() {
        let res = ''

        for (let i = 0; i < ROW_SIZE; i++) {
            res += this.matrix[i][i]
        }
        if (res == 'XXX' || res == 'OOO')
            return true

        return false
    }
    checkSecandDiameter() {
        let res = ''

        for (let i = 0; i < ROW_SIZE; i++) {
            for (let j = 0; j < COL_SIZE; j++) {

                if (j == (ROW_SIZE - 1) - i) {
                    res += this.matrix[i][j]
                }
            }
            if (res == 'XXX' || res == 'OOO')
                return true
        }
        return false
    }
}

let board = new TicTacToe()
board.loadBoard()

board.play(0, 2, 1)
board.play(1, 1, 1)
board.play(2, 0, 1)
board.play(2, 0, 1)



board.print()
