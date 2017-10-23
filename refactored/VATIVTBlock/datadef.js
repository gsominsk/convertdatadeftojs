module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVATIVCalcWhenPrepayment: { public: true, type: 'INTEGER' },
     fSeparateVATIVFromIVForNoVAT: { public: true, type: 'INTEGER' },
     fNoUpdatingTransDate: { public: true, type: 'INTEGER' },
     fTRforVATCorrwithDateinPast: { public: true, type: 'INTEGER' } } }