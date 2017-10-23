module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fClosed: { public: true, type: 'INTEGER' },
     WebNGProductVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fComponentCode: { public: true, type: 'TEXT' },
           fComponentName: { public: true, type: 'TEXT' },
           fRequirement: { public: true, type: 'INTEGER' },
           fQty: { public: true, type: 'FLOAT' },
           fQtyMin: { public: true, type: 'FLOAT' },
           fQtyMax: { public: true, type: 'FLOAT' },
           fSelectionType: { public: true, type: 'INTEGER' } } },
     fFreeComponents: { public: true, type: 'INTEGER' },
     fFreePickingOrder: { public: true, type: 'INTEGER' },
     fProductCategory: { public: true, type: 'TEXT' },
     fXDummy: { public: true, type: 'TEXT' },
     fAllowRental: { public: true, type: 'INTEGER' },
     fConfigurable: { public: true, type: 'INTEGER' },
     fDefLangCode: { public: true, type: 'TEXT' },
     fMoreInfoLink: { public: true, type: 'INTEGER' },
     fSoldInWholeUnits: { public: true, type: 'INTEGER' },
     fSorting: { public: true, type: 'TEXT' },
     fElementCode: { public: true, type: 'TEXT' },
     fLimitedInStock: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex601: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }