module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCountry: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     fDailySum: { public: true, type: 'FLOAT' },
     fBreakfastRate: { public: true, type: 'FLOAT' },
     fLunchRate: { public: true, type: 'FLOAT' },
     fDinnerRate: { public: true, type: 'FLOAT' },
     fOneMealRate: { public: true, type: 'FLOAT' },
     fTwoMealsRate: { public: true, type: 'FLOAT' },
     fThreeMealsRate: { public: true, type: 'FLOAT' } },
  indexes: { CountryIndex798: { fields: [ 'fCountry' ], indicesType: 'UNIQUE' } } }