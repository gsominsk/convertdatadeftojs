module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDefIGroup: { public: true, type: 'TEXT' },
     fUniqueBarCode: { public: true, type: 'INTEGER' },
     fBestBefore: { public: true, type: 'INTEGER' },
     fShowItemStatus: { public: true, type: 'INTEGER' },
     fBarCodeLength: { public: true, type: 'INTEGER' },
     fDefItemType: { public: true, type: 'INTEGER' },
     fNoBasePriceChange: { public: true, type: 'INTEGER' },
     fUpdateCost: { public: true, type: 'INTEGER' },
     fItemFormulaeInclVAT: { public: true, type: 'INTEGER' },
     fSumupItemQty: { public: true, type: 'INTEGER' },
     fBatchStatus: { public: true, type: 'INTEGER' },
     fEnCalcDimQty: { public: true, type: 'INTEGER' },
     fUpdCurPrWithDate: { public: true, type: 'INTEGER' },
     fYourBarCodeDef: { public: true, type: 'TEXT' },
     fBarCodeStartFrom: { public: true, type: 'TEXT' },
     fDemandItemGroup: { public: true, type: 'INTEGER' },
     fWarrantyLength: { public: true, type: 'FLOAT' },
     fSerNrf: { public: true, type: 'INTEGER' },
     fUnittext: { public: true, type: 'TEXT' },
     fSRUpdateCost: { public: true, type: 'INTEGER' },
     fPerceptions: { public: true, type: 'INTEGER' },
     fWithholdings: { public: true, type: 'INTEGER' },
     fUseSupersessionIN: { public: true, type: 'INTEGER' },
     fMultiBuyDiscount: { public: true, type: 'INTEGER' } } }