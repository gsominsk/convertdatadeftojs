module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fItemName: { public: true, type: 'TEXT' },
     fAltItemCode: { public: true, type: 'TEXT' },
     fAltItemName: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' } },
  indexes: 
   { ItemCodeIndex721: 
      { fields: [ 'fItemCode', 'fAltItemCode', 'fCustCode' ],
        indicesType: 'UNIQUE' } } }