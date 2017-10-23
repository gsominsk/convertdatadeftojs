module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUpdateInv: { public: true, type: 'INTEGER' },
     fFIFOPerLocation: { public: true, type: 'INTEGER' },
     fObjOnStock: { public: true, type: 'INTEGER' },
     fItemGroupAccounts: { public: true, type: 'INTEGER' },
     fCompCostAccounts: { public: true, type: 'INTEGER' },
     fFIFOPerSerialNr: { public: true, type: 'INTEGER' },
     fCorespondingAccounts: { public: true, type: 'INTEGER' },
     fItemGroupCostModel: { public: true, type: 'INTEGER' },
     fItemCostPriceonPU: { public: true, type: 'INTEGER' },
     fUpdWeightAvFromRet: { public: true, type: 'INTEGER' },
     fCostAccForNonStocked: { public: true, type: 'INTEGER' },
     fWABase2: { public: true, type: 'INTEGER' },
     fRetPUCostPriceNotFromPU: { public: true, type: 'INTEGER' },
     fUpdWeightAvFromRetPU: { public: true, type: 'INTEGER' },
     fPrimaryCostModel: { public: true, type: 'INTEGER' },
     fCostPerc: { public: true, type: 'FLOAT' },
     fNoNLCostOnShip: { public: true, type: 'INTEGER' },
     fRetFIFOQue: { public: true, type: 'INTEGER' },
     fQueuedCostModel: { public: true, type: 'INTEGER' },
     fWAPerLocation: { public: true, type: 'INTEGER' },
     fCostPricePerLocation: { public: true, type: 'INTEGER' },
     fRetCostPriceFromSH: { public: true, type: 'INTEGER' },
     fBookInPriceVariance: { public: true, type: 'INTEGER' },
     fSalesCostAsStdCost: { public: true, type: 'INTEGER' },
     fDisProdCostPriceFromProd: { public: true, type: 'INTEGER' },
     fINExtraCostInCOGS: { public: true, type: 'INTEGER' } } }