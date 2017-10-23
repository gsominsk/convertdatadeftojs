module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTransDate: { public: true, type: 'DATE' },
     fGuestCode: { public: true, type: 'TEXT' },
     fJobSerNr: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fCountryCode: { public: true, type: 'TEXT' } },
  indexes: 
   { TransDateIndex298: 
      { fields: [ 'fTransDate', 'fGuestCode', 'fJobSerNr' ],
        indicesType: 'UNIQUE' } } }