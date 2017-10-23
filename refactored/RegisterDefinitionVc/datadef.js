module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fName: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     RegisterDefinitionVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fMatFlag: { public: true, type: 'INTEGER' },
           fName: { public: true, type: 'TEXT' },
           fLength: { public: true, type: 'INTEGER' },
           fParameter: { public: true, type: 'INTEGER' },
           fIndexType: { public: true, type: 'INTEGER' },
           fDescription: { public: true, type: 'TEXT' },
           fRegisterLink: { public: true, type: 'TEXT' },
           fAutoNumbering: { public: true, type: 'INTEGER' } } },
     fIcon: { public: true, type: 'INTEGER' },
     fApp: { public: true, type: 'TEXT' },
     fXxStatus: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex560: { fields: [ 'fName' ], indicesType: 'UNIQUE' } } }