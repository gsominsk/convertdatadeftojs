module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSign: { public: true, type: 'TEXT' },
     ConfSubVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fConference: { public: true, type: 'INTEGER' } } } },
  indexes: { SignIndex861: { fields: [ 'fSign' ], indicesType: 'UNIQUE' } } }