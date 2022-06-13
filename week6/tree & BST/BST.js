class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode(value) {
        if (this.value === value) {
            return true
        }
        if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value)

        } else if (value <= this.value && this.leftChild) {
            return this.leftChild.findNode(value)
        }
        return false
    }
    findCommonParent(value1, value2) {

        if (this.leftChild.findNode(value1) && this.rightChild.findNode(value2))
            return this.value

        if (this.leftChild.findNode(value2) && this.rightChild.findNode(value1))
            return this.value

        if (this.leftChild.findNode(value1) || this.leftChild.findNode(value2)) {
            if (this.leftChild.findCommonParent(value1, this.leftChild.value) === this.leftChild.findCommonParent(value1, value2))
                return this.value

            return this.leftChild.findCommonParent(value1, value2)

        }


        if (this.rightChild.findNode(value1) || this.rightChild.findNode(value2))
            return this.rightChild.findCommonParent(value1, value2)


    }
}

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))

console.log(bSTree.findNode("H")); // should print true
console.log(bSTree.findNode("H")); // should print true
console.log(bSTree.findNode("G")); // should print true
console.log(bSTree.findNode("Z")); // should print false
console.log(bSTree.findNode("F")); // should print false
console.log(bSTree.findNode("y")); // should print false - we didn't make the tree case sensitive!

console.log(bSTree.findCommonParent("B", "I")); //should return "H"
console.log(bSTree.findCommonParent("B", "G")); //should return "E"
console.log(bSTree.findCommonParent("L", "B")); //should return "J"
console.log(bSTree.findCommonParent("L", "Y")); //should return "R"
console.log(bSTree.findCommonParent("E", "H")); //should return "J"
