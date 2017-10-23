module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLangCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fTxts0: { public: true, type: 'TEXT' },
     fTxts1: { public: true, type: 'TEXT' },
     fTxts2: { public: true, type: 'TEXT' },
     fTxts3: { public: true, type: 'TEXT' },
     fTxts4: { public: true, type: 'TEXT' },
     fTxts5: { public: true, type: 'TEXT' },
     fTxts6: { public: true, type: 'TEXT' },
     fTxts7: { public: true, type: 'TEXT' },
     fTxts8: { public: true, type: 'TEXT' } },
  indexes: { LangCodeIndex158: { fields: [ 'fLangCode' ], indicesType: 'UNIQUE' } } }