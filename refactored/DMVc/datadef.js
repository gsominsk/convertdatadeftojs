module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fExclFrLabPr: { public: true, type: 'INTEGER' },
     fUseTransSerNr: { public: true, type: 'INTEGER' },
     fTranspSerStart: { public: true, type: 'TEXT' },
     fTranspSerEnd: { public: true, type: 'TEXT' },
     DMVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fExpressService: { public: true, type: 'INTEGER' },
     fFreightCode: { public: true, type: 'TEXT' },
     fShowOnWeb: { public: true, type: 'INTEGER' },
     fWebSort: { public: true, type: 'TEXT' },
     fShipOnAcc: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex145: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }