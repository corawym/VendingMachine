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
        const result = test.subject.refillInventory('juice');
        const expectedResult = [
          {
            "item": "juice",
            "price": 3,
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
        const result = test.subject.dispenseInventory(2.60);
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

    describe('When a given payment is 0 or lower than any item prices', () => {
      it('should throw an error', () => {
         expect(() => test.subject.dispenseInventory(1)).toThrow('Please enter more coins');
      });
    });

  })


  // describe('Returning change as coins', () => {

  //   describe('When a change is required', () => {
  //     it('should return the correct denominations and value', () => {
  //       const result = test.subject.returnChange(.65);
  //       const expectedResult = ['quarter', 'quarter', 'nickel', 'nickel', 'nickel']
  //       expect(result).toEqual(expectedResult);
  //     });
  //   });

  //   describe('When a change is not required', () => {
  //     it('should not return anything', () => {
  //       const result = test.subject.returnChange(0);
  //       expect(result).toBe('No changes');
  //       //  expect(() => test.subject.returnChange('0')).toThrow('Error');
  //     });
  //   });

  // })


});