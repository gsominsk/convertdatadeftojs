module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTransDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     ATCoeffVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCoeffDate: { public: true, type: 'DATE' },
           fCoeffVal: { public: true, type: 'FLOAT' } } } },
  indexes: { TransDateIndex248: { fields: [ 'fTransDate' ], indicesType: 'UNIQUE' } } }