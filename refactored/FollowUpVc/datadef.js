module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fJobNr: { public: true, type: 'INTEGER' },
     fActNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fMainPersons: { public: true, type: 'TEXT' },
     fNReservationStatus: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAmount: { public: true, type: 'FLOAT' },
     fOKFlag: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex343: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }