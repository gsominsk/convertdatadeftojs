module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRegister: { public: true, type: 'INTEGER' },
     fNrSeries: { public: true, type: 'INTEGER' },
     AccTransVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFrom: { public: true, type: 'TEXT' },
           fTo: { public: true, type: 'TEXT' },
           fNegTo: { public: true, type: 'TEXT' },
           fRowSimStat: { public: true, type: 'INTEGER' } } },
     fFactor: { public: true, type: 'FLOAT' },
     fBalAcc: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex156: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }