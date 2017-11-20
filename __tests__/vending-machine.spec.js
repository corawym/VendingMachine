const vendingMachine = require('../src/vending-machine.js');

describe('vendingMachine', () => {


  describe('Printing inventory', () => {

    describe('When a given inventory exists', () => {
      it('should return the correct inventory name, price and quantity', () => {
        expect().toBe();
      });
    });

    describe('When a given inventory does not exist', () => {
      it('should throw an error', () => {
        expect().toThrow();
      });
    });

  })


  describe('Refilling inventory', () => { 

    describe('When a given inventory is refilled', () => {
      it('should return the correct inventory name and quantity', () => {
        expect().toBe();
      });
    });

    describe('When a given inventory is full', () => {
      it('should return it is full', () => {
        expect().toBe();
      });
    });

  })

  
  describe('Re-supplying change', () => { 

    describe('When a given denomination is resupplied', () => {
      it('should return the correct denomination, value and quantity', () => {
        expect().toBe();
      });
    });

    describe('When a given denomination is full', () => {
      it('should return it is full', () => {
        expect().toBe();
      });
    });

  })


  describe('Dispensing inventory based on payment', () => {

    describe('When a given payment is 0', () => {
      it('should not return any inventories', () => {
        expect().toBe();
      });
    });

    describe('When a given payment is 10', () => {
      it('should return the affordable and available inventories', () => {
        expect().toBe();
      });
    });

  })


  describe('Purchasing inventories', () => {

    describe('When a given payment exists and inventories are selected', () => {
      it('should return the correct items with new quantity', () => {
        expect().toBe();
      });
    });

  })


  describe('Returning change as coins', () => {

    describe('When a change is required', () => {
      it('should return the correct denominations and value', () => {
        expect().toBe();
      });
    });

  })





});