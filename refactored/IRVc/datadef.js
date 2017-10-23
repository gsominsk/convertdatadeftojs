module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     IRVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLimit: { public: true, type: 'FLOAT' },
           fRate: { public: true, type: 'FLOAT' } } },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' } },
  indexes: { CDKeyIndex58: { fields: [ 'fCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }