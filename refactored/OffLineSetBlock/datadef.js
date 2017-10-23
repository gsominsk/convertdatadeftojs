module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fOffLineComp: { public: true, type: 'TEXT' },
     fSyncSumPOS: { public: true, type: 'INTEGER' },
     fPOSSalesUpdStock: { public: true, type: 'INTEGER' },
     fOKInvoice: { public: true, type: 'INTEGER' },
     fSyncSettings: { public: true, type: 'INTEGER' } } }