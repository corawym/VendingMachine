const data = {
  "inventories": [
    {
      "item": "water",
      "price": 2,
      "maxQuantity": 10,
      "quantity": 10
    },
    {
      "item": "coke",
      "price": 2,
      "maxQuantity": 10,
      "quantity": 2
    },
    {
      "item": "juice",
      "price": 3,
      "maxQuantity": 10,
      "quantity": 5
    },
    {
      "item": "chips",
      "price": 2.75,
      "maxQuantity": 10,
      "quantity": 1
    },
    {
      "item": "chocolate",
      "price": 2.50,
      "maxQuantity": 10,
      "quantity": 0
    },
  ],
  "change": [
    {
      "denomination": "toonie",
      "value": 2.00,
      "maxQuantity": 10,
      "quantity": 10
    },
    {
      "denomination": "loonie",
      "value": 1.00,
      "maxQuantity": 10,
      "quantity": 10
    },
    {
      "denomination": "quarter",
      "value": 0.25,
      "maxQuantity": 10,
      "quantity": 6
    },
    {
      "denomination": "dime",
      "value": 0.10,
      "maxQuantity": 10,
      "quantity": 0
    },
    {
      "denomination": "nickel",
      "value": 0.05,
      "maxQuantity": 10,
      "quantity": 5
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
      if (this.inventories.filter((inventory) => inventory.item === itemName).length > 0) {
        return this.inventories.filter((inventory) => inventory.item === itemName)
      } else {
        throw new Error('Please enter a valid item name')
      }
    }
    throw new Error('Please enter a valid item name')
  }

  refillInventory(itemName){
    if (typeof itemName === 'string' && itemName.length > 0) {
      if (this.inventories.filter((inventory) => inventory.item === itemName).length > 0) {
        this.inventories.forEach((inventory) => {
          if(inventory.item === itemName){
            inventory.quantity = inventory.maxQuantity
          }
        })
        return this.inventories.filter((inventory) => inventory.item === itemName);
      } else {
        throw new Error('Please enter a valid item name')
      }
    }  
    throw new Error('Please enter a valid item name')
  }

  resupplyChange(denomination){
    if (typeof denomination === 'string' && denomination.length > 0) {
     if (this.change.filter((change) => change.denomination === denomination).length > 0) {
        this.change.forEach((change) => {
          if(change.denomination === denomination){
            change.quantity = change.maxQuantity
          }
        })
        return this.change.filter((change) => change.denomination === denomination);
      } else {
        throw new Error('Please enter a valid denomination')
      }
    }
    throw new Error('Please enter a valid denomination')
  }

  dispenseInventory(payment){
    if (typeof payment === 'number' && payment > 0) {
      if (this.inventories.filter((inventory) => payment >= inventory.price && inventory.quantity > 0).length > 0 ) {
        return this.inventories.filter((inventory) => payment >= inventory.price && inventory.quantity > 0)
      } else {
        throw new Error('Please enter more coins')
      } 
    }
    throw new Error('Please enter more coins')
  }

  // // selectItem(itemName){

  // // }

  returnChange(change){
    if (typeof change === 'number' && change > 0) {
      let i = 0
      let changeCoins =[]
      while(i < this.change.length){
        if(change >= this.change[i].value && this.change[i].quantity > 0){  
          this.change[i].quantity -= 1; //to update the current change in data
          changeCoins.push(this.change[i].denomination)
          change = (change - this.change[i].value).toFixed(2);
        }else{
          i++
        }
      }
      return changeCoins
    } else if (change === 0) {
      return 'No changes'
    }
    throw new Error('It is not a valid change request')
  }

}

module.exports = vendingMachine