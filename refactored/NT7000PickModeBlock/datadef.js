module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fActiveSHNr: { public: true, type: 'INTEGER' },
     fActiveForkLiftQueNr: { public: true, type: 'INTEGER' },
     fForkLift: { public: true, type: 'TEXT' },
     fPalletCnt: { public: true, type: 'INTEGER' } } }