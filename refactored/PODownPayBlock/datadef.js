module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPayDeal: { public: true, type: 'TEXT' },
     fPercentage: { public: true, type: 'FLOAT' },
     fArtCode: { public: true, type: 'TEXT' },
     fTextA: { public: true, type: 'TEXT' },
     fTextB: { public: true, type: 'TEXT' },
     fTextC: { public: true, type: 'TEXT' },
     fTextD: { public: true, type: 'TEXT' },
     fCalcMode: { public: true, type: 'INTEGER' },
     fConnPrePayAndPurchaseOrder: { public: true, type: 'INTEGER' },
     fVATCode: { public: true, type: 'TEXT' },
     fDetailsOnVI: { public: true, type: 'INTEGER' },
     fTaxTemplateCode: { public: true, type: 'TEXT' } } }