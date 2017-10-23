module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTravelLogNr: { public: true, type: 'INTEGER' },
     fTravelLogDate: { public: true, type: 'DATE' },
     fCountryCode: { public: true, type: 'TEXT' },
     fDepartureTime: { public: true, type: 'TIME' },
     fArrivalTime: { public: true, type: 'TIME' },
     fDeduct0: { public: true, type: 'INTEGER' },
     fDeduct1: { public: true, type: 'INTEGER' },
     fDeduct2: { public: true, type: 'INTEGER' },
     fDeduct3: { public: true, type: 'INTEGER' },
     fDeduct4: { public: true, type: 'INTEGER' },
     fSum: { public: true, type: 'FLOAT' } },
  indexes: 
   { TravelLogNrDateIndex690: 
      { fields: [ 'fTravelLogNr', 'fTravelLogDate' ],
        indicesType: 'UNIQUE' } } }