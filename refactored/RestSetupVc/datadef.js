module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBranchID: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fKitchenCoordinator: { public: true, type: 'TEXT' },
     fKitchenSupervisor: { public: true, type: 'TEXT' },
     fKitchenOrderMaxTime: { public: true, type: 'TIME' },
     fProceedPaymentPrintReceipt: { public: true, type: 'INTEGER' },
     fProceedPaymentPrintKitchenOrder: { public: true, type: 'INTEGER' },
     fProceedPaymentSaveTab: { public: true, type: 'INTEGER' },
     fMealCourse: { public: true, type: 'INTEGER' },
     fDefDishStatus: { public: true, type: 'TEXT' },
     fFinDishStatus: { public: true, type: 'TEXT' } },
  indexes: { BranchIDIndex756: { fields: [ 'fBranchID' ], indicesType: 'UNIQUE' } } }