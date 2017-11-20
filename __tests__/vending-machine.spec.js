const vendingMachine = require('../src/vending-machine.js');

describe('vendingMachine', () => {

  beforeEach(() => {
    test.subject = new vendingMachine();
  })


  describe('Printing inventory', () => {

    describe('When a given inventory exists', () => {
      it('should return the correct inventory name, price and quantity', () => {
        const result = test.subject.printInventory('water');
        const expectedResult = [
          {
            "item": "water",
            "price": 2,
            "maxQuantity": 10,
            "quantity": 10
          }
        ]
        expect(result).toEqual(expectedResult);
      });
    });

    describe('When a given inventory does not exist', () => {
      it('should throw an error', () => {
        expect(() => test.subject.printInventory('orange')).toThrow('Please enter a valid item name');
      });
    });

  })


  describe('Refilling inventory', () => { 

    describe('When a given inventory exists', () => {
      it('should return the correct inventory with quantity refilled to max quantity', () => {
        const result = test.subject.refillInventory('coke');
        const expectedResult = [
          {
            "item": "coke",
            "price": 2,
            "maxQuantity": 10,
            "quantity": 10
          }
        ]
        expect(result).toEqual(expectedResult);
      });
    });

    describe('When a given inventory does not exist', () => {
      it('should throw an error', () => {
        expect(() => test.subject.refillInventory('orange')).toThrow('Please enter a valid item name');
      });
    });

  })

  
  describe('Re-supplying change', () => { 

    describe('When a given denomination exists', () => {
      it('should return the correct denomination with quantity refilled to max quantity', () => {
        const result = test.subject.resupplyChange('quarter');
        const expectedResult = [
          {
            "denomination": "quarter",
            "value": 0.25,
            "maxQuantity": 10,
            "quantity": 10
          }
        ]
        expect(result).toEqual(expectedResult);
      });
    });

    describe('When a given denomination does not exists', () => {
      it('should throw an error', () => {
         expect(() => test.subject.resupplyChange('penny')).toThrow('Please enter a valid denomination');
      });
    });

  })


  describe('Dispensing inventory based on payment', () => {

    describe('When a given payment is higher than any item prices', () => {
      it('should return the affordable and available inventories', () => {
        const result = test.subject.dispenseInventory(2.6);
        const expectedResult = [
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
          }
        ]
        expect(result).toEqual(expectedResult);
      });
    });

    describe('When a given payment is 0', () => {
      it('should throw an error', () => {
         expect(() => test.subject.dispenseInventory(0)).toThrow('Please enter more coins');
      });
    });

  })


  // describe('Purchasing inventories', () => {

  //   describe('When a given payment exists and inventories are selected', () => {
  //     it('should return the correct items with new quantity', () => {
  //       expect().toBe();
  //     });
  //   });

  // })


  // describe('Returning change as coins', () => {

  //   describe('When a change is required', () => {
  //     it('should return the correct denominations and value', () => {
  //       expect().toBe();
  //     });
  //   });

  // })


});