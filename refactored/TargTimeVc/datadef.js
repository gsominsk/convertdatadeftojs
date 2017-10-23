module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPerson: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fName: { public: true, type: 'TEXT' },
     TargTimeVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fActType: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' },
           fDays: { public: true, type: 'INTEGER' },
           fWorkDays: { public: true, type: 'INTEGER' },
           fHours: { public: true, type: 'FLOAT' } } },
     fTotal: { public: true, type: 'FLOAT' } },
  indexes: { MainKeyIndex139: { fields: [ 'fPerson', 'fStartDate' ], indicesType: 'UNIQUE' } } }