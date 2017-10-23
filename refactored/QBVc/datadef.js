module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     fInvType: { public: true, type: 'INTEGER' },
     QBVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPeriod: { public: true, type: 'FLOAT' },
           fQBRate: { public: true, type: 'FLOAT' } } } },
  indexes: { DateIndex173: { fields: [ 'fDate' ], indicesType: 'UNIQUE' } } }