module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fStandardID: { public: true, type: 'TEXT' },
     fUserCode: { public: true, type: 'TEXT' },
     fServerUUID: { public: true, type: 'TEXT' },
     fController: { public: true, type: 'TEXT' },
     fActionType: { public: true, type: 'INTEGER' },
     fUUID: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex868: { fields: [ 'fUUID' ], indicesType: 'UNIQUE' } } }