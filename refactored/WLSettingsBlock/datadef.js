module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCostPerkm: { public: true, type: 'FLOAT' },
     fItemCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAccNumber: { public: true, type: 'TEXT' },
     fExportFileName: { public: true, type: 'TEXT' },
     fDistUnit: { public: true, type: 'INTEGER' },
     fContinuousDrive: { public: true, type: 'INTEGER' },
     fMaxRecCnt: { public: true, type: 'INTEGER' },
     fCompName: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' } } }