
const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {

      if (!this.drinkRequirements.hasOwnProperty(drinkType)){
        console.log("Sorry, we don't make " + drinkType);
      }
      else if (this.beans - this.drinkRequirements[drinkType].beanRequirement >= 0){
        this.beans = this.beans - this.drinkRequirements[drinkType].beanRequirement
      }
      else {
        console.log("Sorry, we're all out of beans!");
      }

    }

  }

  
  // coffeeShop.makeDrink("latte"); 
  // coffeeShop.makeDrink("americano");
  // coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  // coffeeShop.makeDrink("doubleShot");
  // coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


// Extension 1

coffeeShop["monay"] = 100 
coffeeShop["buyBeans"] = buyBeans

function buyBeans(numBeans) {
  this.beans += numBeans
  this.monay -= numBeans * 1
}

// Extension 2
let x = {
  latte: {beanRequirement: 10, price: 5},
  americano: {beanRequirement: 5, price: 10},
  doubleShot: {beanRequirement: 15, price: 15},
  frenchPress: {beanRequirement: 12, price: 15}
}
coffeeShop.drinkRequirements = x
coffeeShop.buyDrink = buyDrink

function buyDrink(drinkType) {
  this.monay += this.drinkRequirements[drinkType].price
  this.makeDrink(drinkType)
}


//test Extension 1

// coffeeShop.buyBeans(60)
// console.log(coffeeShop.beans); // 70
// console.log(coffeeShop.monay); // 40


//test Extension 2

// coffeeShop.buyDrink("latte") 
// console.log(coffeeShop.beans); // 0
// console.log(coffeeShop.monay); // 105


