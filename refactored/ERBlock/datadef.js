module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fERTime: { public: true, type: 'TIME' },
     fBCRates: { public: true, type: 'INTEGER' },
     fIdleTask: { public: true, type: 'INTEGER' },
     fOverwriteExistRate: { public: true, type: 'INTEGER' },
     fRunDate: { public: true, type: 'DATE' },
     fB2CurCode: { public: true, type: 'TEXT' },
     fVATLawExchangeRate: { public: true, type: 'INTEGER' } } }