module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLangCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMonday: { public: true, type: 'TEXT' },
     fTuesday: { public: true, type: 'TEXT' },
     fWednesday: { public: true, type: 'TEXT' },
     fThursday: { public: true, type: 'TEXT' },
     fFriday: { public: true, type: 'TEXT' },
     fSaturday: { public: true, type: 'TEXT' },
     fSunday: { public: true, type: 'TEXT' },
     fJanuary: { public: true, type: 'TEXT' },
     fFebruary: { public: true, type: 'TEXT' },
     fMarch: { public: true, type: 'TEXT' },
     fApril: { public: true, type: 'TEXT' },
     fMay: { public: true, type: 'TEXT' },
     fJune: { public: true, type: 'TEXT' },
     fJuly: { public: true, type: 'TEXT' },
     fAugust: { public: true, type: 'TEXT' },
     fSeptember: { public: true, type: 'TEXT' },
     fOctober: { public: true, type: 'TEXT' },
     fNovember: { public: true, type: 'TEXT' },
     fDecember: { public: true, type: 'TEXT' } },
  indexes: { LangCodeIndex159: { fields: [ 'fLangCode' ], indicesType: 'UNIQUE' } } }