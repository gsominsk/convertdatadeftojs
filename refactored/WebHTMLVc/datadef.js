module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSubCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPicName: { public: true, type: 'TEXT' },
     fSmallPicName: { public: true, type: 'TEXT' },
     fFabric: { public: true, type: 'TEXT' },
     fExtra1: { public: true, type: 'TEXT' },
     fExtra2: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex279: { fields: [ 'fCode', 'fSubCode' ], indicesType: 'UNIQUE' } } }