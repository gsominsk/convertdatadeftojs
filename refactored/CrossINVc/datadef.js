module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fItemName: { public: true, type: 'TEXT' },
     fCrossItemCode: { public: true, type: 'TEXT' },
     fCrossItemName: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustName: { public: true, type: 'TEXT' } },
  indexes: 
   { ItemCodeIndex722: 
      { fields: [ 'fItemCode', 'fCrossItemCode', 'fCustCode' ],
        indicesType: 'UNIQUE' } } }