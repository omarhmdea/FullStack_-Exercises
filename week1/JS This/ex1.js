const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        console.log('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"