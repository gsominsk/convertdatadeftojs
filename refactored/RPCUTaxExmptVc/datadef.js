module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fRegion: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fDiscount: { public: true, type: 'FLOAT' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: 
   { CustCodeIndex850: 
      { fields: [ 'fCustCode', 'fRegion', 'fStartDate' ],
        indicesType: 'UNIQUE' } } }