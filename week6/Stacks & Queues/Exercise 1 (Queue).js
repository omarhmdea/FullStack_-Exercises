class Queue {
    constructor() {
        this.queue = []
        this.length = 0
    }

    print() {
        console.log(this.queue)
    }

    enqueue(x) {
        this.queue.unshift(x)
        this.length++
    }

    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.queue[this.length - 1]
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        return this.queue.splice(this.length,1)
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true