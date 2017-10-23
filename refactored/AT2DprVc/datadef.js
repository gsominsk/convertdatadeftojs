module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fAT2Code: { public: true, type: 'TEXT' },
     fDescription: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartingDate1: { public: true, type: 'DATE' },
     fModel1: { public: true, type: 'TEXT' },
     fModel2: { public: true, type: 'TEXT' },
     fStartVal: { public: true, type: 'FLOAT' },
     fStartVal2: { public: true, type: 'FLOAT' },
     fInventoryNr: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fResVal: { public: true, type: 'FLOAT' },
     fSign: { public: true, type: 'TEXT' },
     fModSerNr: { public: true, type: 'INTEGER' },
     fNonFiscalCostVal: { public: true, type: 'FLOAT' },
     fAT2Group: { public: true, type: 'TEXT' },
     fStartingDate2: { public: true, type: 'DATE' },
     fLegalCode: { public: true, type: 'TEXT' },
     fEndDate: { public: true, type: 'DATE' },
     fSMSerNr: { public: true, type: 'INTEGER' },
     fTerminateDpr: { public: true, type: 'INTEGER' },
     fATSerialNr: { public: true, type: 'TEXT' },
     fLandVal: { public: true, type: 'FLOAT' },
     fStartValLimit: { public: true, type: 'FLOAT' },
     fStartVal2Limit: { public: true, type: 'FLOAT' },
     fInitDeprVal1: { public: true, type: 'FLOAT' },
     fInitDeprVal2: { public: true, type: 'FLOAT' } },
  indexes: { SerNrIndex252: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }