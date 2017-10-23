module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' },
     SVOTextVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fSpec: { public: true, type: 'TEXT' } } } },
  indexes: { SerialNrIndex190: { fields: [ 'fSerialNr', 'fArtCode' ], indicesType: 'UNIQUE' } } }