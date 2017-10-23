module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fItemCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fSugQty: { public: true, type: 'FLOAT' },
     fQty: { public: true, type: 'FLOAT' },
     fProdPlanSer: { public: true, type: 'INTEGER' },
     fNeededDate: { public: true, type: 'DATE' },
     fOrderItemCode: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex525: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }