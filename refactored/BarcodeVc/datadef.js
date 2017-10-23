module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBarcode: { public: true, type: 'TEXT' },
     fItemcode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fBarCodeSerialNo: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' } },
  indexes: { BarcodeIndex97: { fields: [ 'fBarcode' ], indicesType: 'UNIQUE' } } }