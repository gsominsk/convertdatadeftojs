module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     DefJobCustVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fCust: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex381: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }