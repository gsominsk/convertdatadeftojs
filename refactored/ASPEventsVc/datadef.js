module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fComment: { public: true, type: 'TEXT' },
     fEventType: { public: true, type: 'INTEGER' },
     fUserCode: { public: true, type: 'TEXT' },
     fServerUUID: { public: true, type: 'TEXT' },
     fController: { public: true, type: 'TEXT' },
     fUUID: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex876: { fields: [ 'fUUID' ], indicesType: 'UNIQUE' } } }