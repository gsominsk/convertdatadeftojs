module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFileName: { public: true, type: 'TEXT' },
     fPackTyp: { public: true, type: 'INTEGER' },
     fUploading: { public: true, type: 'INTEGER' },
     fFileSize: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fStorage: { public: true, type: 'INTEGER' },
     fContentId: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex209: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }