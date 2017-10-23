module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTerminateFlag: { public: true, type: 'INTEGER' },
     fSign: { public: true, type: 'TEXT' },
     fStart: { public: true, type: 'TEXT' },
     fLength: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex1: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }