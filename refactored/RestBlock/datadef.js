module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAllowBarTabwoGuest: { public: true, type: 'INTEGER' },
     fUseReportingDateforNL: { public: true, type: 'INTEGER' },
     fTableViewDisplay: { public: true, type: 'INTEGER' },
     fAddingItemToBarTab: { public: true, type: 'INTEGER' },
     fProceedPaymentPrintReceipt: { public: true, type: 'INTEGER' },
     fProceedPaymentPrintKitchenOrder: { public: true, type: 'INTEGER' },
     fProceedPaymentSaveTab: { public: true, type: 'INTEGER' },
     fMealCourse: { public: true, type: 'INTEGER' },
     fAllowPartialItemVoid: { public: true, type: 'INTEGER' },
     fDefDishStatus: { public: true, type: 'TEXT' },
     fFinDishStatus: { public: true, type: 'TEXT' } } }