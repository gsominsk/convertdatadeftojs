module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fResCode: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fOnOffFlag: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex236: 
      { fields: [ 'fResCode', 'fStartDate', 'fStartTime' ],
        indicesType: 'UNIQUE' } } }