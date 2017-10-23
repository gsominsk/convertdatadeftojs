module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fFromFileName: { public: true, type: 'INTEGER' },
     fFromSerNr: { public: true, type: 'INTEGER' },
     fToFileName: { public: true, type: 'INTEGER' },
     fToSerNr: { public: true, type: 'INTEGER' },
     fIntoLocation: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fComment: { public: true, type: 'TEXT' },
     fArtCode: { public: true, type: 'TEXT' },
     fQuant: { public: true, type: 'FLOAT' },
     fQuantDone: { public: true, type: 'FLOAT' },
     fDonef: { public: true, type: 'INTEGER' },
     fShortSign: { public: true, type: 'TEXT' },
     fFromLocation: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' },
     fPrioLevel: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex506: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }