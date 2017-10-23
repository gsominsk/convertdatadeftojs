module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fValidUntil: { public: true, type: 'DATE' },
     fUUIDStr: { public: true, type: 'TEXT' },
     fConfirmedFlag: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex833: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }