module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fEvent: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fRecordTyp: { public: true, type: 'INTEGER' },
     fSequence: { public: true, type: 'INTEGER' },
     fMath: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex61: 
      { fields: [ 'fCode', 'fEvent', 'fType', 'fSequence' ],
        indicesType: 'UNIQUE' } } }