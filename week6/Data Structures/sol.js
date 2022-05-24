class UniqueArray {

    constructor() {
        this.arr = []
        this.lenght = 0
        this.obj = {}
    }
    add(item) {
        if(!this.exists(item)){
            this.arr[this.lenght++] = item
            this.obj[JSON.stringify(item)] = 1
        }
    }
    showAll(){
        console.log(this.arr);
    }
    exists(item){
        return this.obj[JSON.stringify(item)] ? true : false
    }
    get(index){
        return this.arr[index] ? this.arr[index] : -1
    }
}
const uniqueStuff = new UniqueArray()
uniqueStuff.add({a:3}) 
uniqueStuff.add({a:3}) 
uniqueStuff.add({a:4}) 
uniqueStuff.add({a:3}) 
uniqueStuff.showAll()
