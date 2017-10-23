module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPickOrder: { public: true, type: 'INTEGER' },
     fLocArea: { public: true, type: 'TEXT' },
     fWidth: { public: true, type: 'FLOAT' },
     fHeight: { public: true, type: 'FLOAT' },
     fDepth: { public: true, type: 'FLOAT' },
     fMaxWeight: { public: true, type: 'FLOAT' },
     fStatus: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: { MainKeyIndex278: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }