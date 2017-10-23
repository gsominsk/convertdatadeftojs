module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPrice: { public: true, type: 'FLOAT' },
     fDescstr: { public: true, type: 'TEXT' },
     fDiscount: { public: true, type: 'FLOAT' },
     fVatcode: { public: true, type: 'TEXT' },
     fBasepricep: { public: true, type: 'FLOAT' },
     fSalesacc: { public: true, type: 'TEXT' },
     fTax2code: { public: true, type: 'TEXT' },
     fTax2prc: { public: true, type: 'FLOAT' },
     fTaxtempletecode: { public: true, type: 'TEXT' } } }