module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fEmployee: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fDays: { public: true, type: 'FLOAT' },
     fSign: { public: true, type: 'TEXT' },
     fAcceptanceStatus: { public: true, type: 'INTEGER' },
     fAcceptanceBy: { public: true, type: 'TEXT' },
     fAcceptanceFYI: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex718: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }