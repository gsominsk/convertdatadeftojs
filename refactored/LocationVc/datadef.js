module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fAddr0: { public: true, type: 'TEXT' },
     fAddr1: { public: true, type: 'TEXT' },
     fAddr2: { public: true, type: 'TEXT' },
     fContact: { public: true, type: 'TEXT' },
     fPhone: { public: true, type: 'TEXT' },
     fFax: { public: true, type: 'TEXT' },
     fStockAcc: { public: true, type: 'TEXT' },
     fIgnoreChronology: { public: true, type: 'INTEGER' },
     fLastOKNr: { public: true, type: 'FLOAT' },
     fEmail: { public: true, type: 'TEXT' },
     fPriceList: { public: true, type: 'TEXT' },
     fRequirePos: { public: true, type: 'INTEGER' },
     fAddr3: { public: true, type: 'TEXT' },
     fAddr4: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fRespPerson: { public: true, type: 'TEXT' },
     fReservLocAccess: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fPurLoc: { public: true, type: 'TEXT' },
     fShipToAccount: { public: true, type: 'TEXT' },
     fGroup: { public: true, type: 'TEXT' },
     fClassification: { public: true, type: 'TEXT' },
     fWHMPalletArea: { public: true, type: 'TEXT' },
     fWHMDefPUPosCode: { public: true, type: 'TEXT' },
     fWHMDefProdPosCode: { public: true, type: 'TEXT' },
     fWHMPickArea: { public: true, type: 'TEXT' },
     fWHMWraperPosCode: { public: true, type: 'TEXT' },
     fWHMDeliveryPosCode: { public: true, type: 'TEXT' },
     fWHMForkLiftSystem: { public: true, type: 'INTEGER' },
     fWHMAutOKStockMovements: { public: true, type: 'INTEGER' },
     fWHMDeliveryArea: { public: true, type: 'TEXT' },
     fWHMPickOrderPerArea: { public: true, type: 'INTEGER' },
     fWHMHighestPosCodeFirst: { public: true, type: 'INTEGER' },
     fWHMDefPUVECode: { public: true, type: 'TEXT' },
     fWHMExpressOrderClass: { public: true, type: 'TEXT' },
     fThrouLocation: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex71: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }