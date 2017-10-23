module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fDAAcc: { public: true, type: 'TEXT' },
     fDefQuantity: { public: true, type: 'FLOAT' },
     fVATCode: { public: true, type: 'TEXT' },
     fRateType: { public: true, type: 'INTEGER' },
     fBreakfastRate: { public: true, type: 'FLOAT' },
     fLunchRate: { public: true, type: 'FLOAT' },
     fDinnerRate: { public: true, type: 'FLOAT' },
     fOneMealRate: { public: true, type: 'FLOAT' },
     fTwoMealsRate: { public: true, type: 'FLOAT' },
     fThreeMealsRate: { public: true, type: 'FLOAT' } } }