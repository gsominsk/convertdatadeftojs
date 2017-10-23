module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPOCOSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fExtraCostCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fSum: { public: true, type: 'FLOAT' },
     fArtCode: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' } },
  indexes: 
   { POCOSerNrIndex303: 
      { fields: 
         [ 'fPOCOSerNr',
           'fExtraCostCode',
           'fArtCode',
           'fSerialNr',
           'fTransDate' ],
        indicesType: 'UNIQUE' } } }