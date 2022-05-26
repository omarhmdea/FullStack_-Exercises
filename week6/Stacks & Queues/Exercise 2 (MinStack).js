class MinStack {
    constructor() {
        this.stack = []
        this.length = 0
        this.minTemp = []
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
        this.stack[this.length] = x

        const min = this.getMin()

        if (min == null) {
            this.minTemp[this.length] = x
        }
        else {
            this.minTemp[this.length] = Math.min(min, x)
        }
        this.length++
    }

    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }

        this.length--
        delete this.minTemp[this.length]

        return delete this.stack[this.length]
    }
    
    getMin() {
        return this.isEmpty() ? null : this.minTemp[this.length - 1]
    }
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19