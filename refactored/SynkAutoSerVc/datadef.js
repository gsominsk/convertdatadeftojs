module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     SynkAutoSerVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFileName: { public: true, type: 'TEXT' },
           fNumberSeries: { public: true, type: 'INTEGER' },
           fNrsRangeQty: { public: true, type: 'INTEGER' },
           fNrsMinimum: { public: true, type: 'INTEGER' } } } },
  indexes: 
   { UserCodeIndex617: 
      { fields: [ 'fUserCode', 'fSalesGroup' ],
        indicesType: 'UNIQUE' } } }