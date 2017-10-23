module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     TelDayMatrixVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDayName: { public: true, type: 'TEXT' },
           fStartTime: { public: true, type: 'TIME' },
           fEndTime: { public: true, type: 'TIME' },
           fPulseSec: { public: true, type: 'FLOAT' },
           fPulsePrice: { public: true, type: 'FLOAT' },
           fPulseSec2: { public: true, type: 'FLOAT' },
           fPulsePrice2: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex387: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }