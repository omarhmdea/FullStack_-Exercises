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
        return this.queue.splice(this.length, 1)
    }
    
}

class DuoQueue {

    constructor() {
        this.q_1 = new Queue()
        this.q_2 = new Queue()
    }
    enqueue(person, qNum) {
        const qName = 'q_' + qNum
        this[qName].enqueue(person)
    }
    dequeue(qNum) {
        const qName = 'q_' + qNum
        this[qName].dequeue(qName)
    }
    getLongestQueue() {
        return this.q_1.length > this.q_2.length ? this.q_1 : this.q_2
    }
    getShortestQueue() {
        return this.q_1.length < this.q_2.length ? this.q_1 : this.q_2
    }
    balanceQueues() {

        let longestQ = this.getLongestQueue()
        let shortestQ = this.getShortestQueue()
        let diff = longestQ.length - shortestQ.length

        while (diff > 1) {
            let item = longestQ.dequeue()[0]
            shortestQ.enqueue(item)
            diff = longestQ.length - shortestQ.length
        }
    }

}

let dq = new DuoQueue()

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }