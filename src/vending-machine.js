const data = {
  "inventories": [
    {
      "item": "Water",
      "price": 2,
      "maxQuantity": 10,
      "quantity": 10
    },
    {
      "item": "Coke",
      "price": 2,
      "maxQuantity": 10,
      "quantity": 2
    },
    {
      "item": "Juice",
      "price": 3,
      "maxQuantity": 10,
      "quantity": 5
    },
    {
      "item": "Chips",
      "price": 2.75,
      "maxQuantity": 10,
      "quantity": 0
    },
    {
      "item": "Chocolate",
      "price": 2.50,
      "maxQuantity": 10,
      "quantity": 5
    },
  ],
  "change": [
    {
      "denomination": "nickel",
      "value": 0.05,
      "maxQuantity": 10,
      "quantity": 5
    },
    {
      "denomination": "dime",
      "value": 0.10,
      "maxQuantity": 10,
      "quantity": 5
    },
    {
      "denomination": "quarter",
      "value": 0.25,
      "maxQuantity": 10,
      "quantity": 5
    },
    {
      "denomination": "loonie",
      "value": 1.00,
      "maxQuantity": 10,
      "quantity": 10
    },
    {
      "denomination": "toonie",
      "value": 2.00,
      "maxQuantity": 10,
      "quantity": 10
    }
  ]
}

class vendingMachine {

  constructor(){
    this.inventories = data.inventories,
    this.change = data.change
  }

  printInventory(itemName){
    if (typeof itemName === 'string' && itemName.length > 0) {
      const itemFound = this.inventories.filter((inventory) => {
        return itemName === inventory.item
      })
      // console.log(itemFound)
      if (itemFound.length > 0) {
        return itemFound
      } else {
        throw new Error('Please enter a valid item name')
      }
    }
    throw new Error('Please enter a valid item name')
  }

  // refillInventory(){

  // }

  // resupplyChange(){

  // }

  // dispenseInventory(){

  // }

  // returnChange(){

  // }

}

module.exports = vendingMachine