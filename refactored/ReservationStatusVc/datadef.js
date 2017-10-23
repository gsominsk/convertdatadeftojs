module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCalColNr: { public: true, type: 'INTEGER' },
     fStatType: { public: true, type: 'INTEGER' },
     fSeqNr: { public: true, type: 'INTEGER' },
     fDocName: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex224: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }