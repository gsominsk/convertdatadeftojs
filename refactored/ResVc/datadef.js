module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fContact: { public: true, type: 'TEXT' },
     fBankAcc: { public: true, type: 'TEXT' },
     fBankName: { public: true, type: 'TEXT' },
     fComment0: { public: true, type: 'TEXT' },
     fTerminated: { public: true, type: 'INTEGER' },
     fNumber: { public: true, type: 'TEXT' },
     fClass: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'TEXT' },
     fSpec: { public: true, type: 'TEXT' },
     fCategory: { public: true, type: 'TEXT' },
     fXMode: { public: true, type: 'TEXT' },
     fXDescription: { public: true, type: 'TEXT' },
     fXKey: { public: true, type: 'TEXT' },
     fJobGroup: { public: true, type: 'TEXT' },
     fResLoc: { public: true, type: 'TEXT' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fDefArtCode: { public: true, type: 'TEXT' },
     fAreaCode: { public: true, type: 'TEXT' },
     fInvoiceBy: { public: true, type: 'INTEGER' },
     fXPich: { public: true, type: 'TEXT' },
     fResStatus: { public: true, type: 'TEXT' },
     fInvAsGroup: { public: true, type: 'INTEGER' },
     fMaxPersons: { public: true, type: 'INTEGER' },
     fPosX: { public: true, type: 'INTEGER' },
     fPosY: { public: true, type: 'INTEGER' },
     fSmoking: { public: true, type: 'INTEGER' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fAddr3: { public: true, type: 'TEXT' },
     fComment1: { public: true, type: 'TEXT' },
     fComment2: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fEMail: { public: true, type: 'TEXT' },
     fWwwAddr: { public: true, type: 'TEXT' },
     fEquipment1: { public: true, type: 'TEXT' },
     fEquipment2: { public: true, type: 'TEXT' },
     fEquipment3: { public: true, type: 'TEXT' },
     fMaxExtraBeds: { public: true, type: 'INTEGER' },
     fMaxChildren: { public: true, type: 'INTEGER' },
     fMaxPax: { public: true, type: 'INTEGER' },
     fSort: { public: true, type: 'INTEGER' },
     fObjects: { public: true, type: 'TEXT' },
     fResources: { public: true, type: 'TEXT' },
     fPrice: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex225: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }