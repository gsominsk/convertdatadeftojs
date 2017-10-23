module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fInvType: { public: true, type: 'INTEGER' },
     SWAPVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPeriod: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex175: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }