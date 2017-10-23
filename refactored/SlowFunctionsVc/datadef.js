module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fTime: { public: true, type: 'TIME' },
     fAC: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fTimeInServer: { public: true, type: 'INTEGER' } },
  indexes: 
   { UserCodeIndex521: 
      { fields: [ 'fUserCode', 'fDate', 'fTime' ],
        indicesType: 'UNIQUE' } } }