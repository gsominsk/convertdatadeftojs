module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fRegister: { public: true, type: 'INTEGER' },
     fNrSeries: { public: true, type: 'INTEGER' },
     AccElimVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAcc1: { public: true, type: 'TEXT' },
           fAcc2: { public: true, type: 'TEXT' },
           fToAcc: { public: true, type: 'TEXT' },
           fRowSimStat: { public: true, type: 'INTEGER' },
           fAcc1Object: { public: true, type: 'TEXT' },
           fAcc2Object: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex435: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }