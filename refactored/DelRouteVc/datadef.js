module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMonFlag: { public: true, type: 'INTEGER' },
     fTueFlag: { public: true, type: 'INTEGER' },
     fWedFlag: { public: true, type: 'INTEGER' },
     fThuFlag: { public: true, type: 'INTEGER' },
     fFriFlag: { public: true, type: 'INTEGER' },
     fSatFlag: { public: true, type: 'INTEGER' },
     fSunFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex723: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }