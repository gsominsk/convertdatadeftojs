module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fOldArtCode: { public: true, type: 'TEXT' },
     fNewArtCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fClosed: { public: true, type: 'INTEGER' } },
  indexes: 
   { MainKeyIndex671: 
      { fields: [ 'fOldArtCode', 'fNewArtCode' ],
        indicesType: 'UNIQUE' } } }