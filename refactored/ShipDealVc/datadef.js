module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fIncInsurance: { public: true, type: 'INTEGER' },
     fIncFreight: { public: true, type: 'INTEGER' },
     fIncCost1: { public: true, type: 'INTEGER' },
     fIncCost2: { public: true, type: 'INTEGER' },
     fFreightPaid: { public: true, type: 'INTEGER' },
     ShipDealVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex144: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }