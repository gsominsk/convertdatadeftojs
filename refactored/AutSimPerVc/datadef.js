module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPrelAcc: { public: true, type: 'TEXT' },
     AutSimPerVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fMonths: { public: true, type: 'TEXT' },
           fDays: { public: true, type: 'TEXT' },
           fCalc: { public: true, type: 'FLOAT' },
           fVATCode: { public: true, type: 'TEXT' } } },
     fTempAcc: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex65: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }