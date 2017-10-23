module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCommonNoSer: { public: true, type: 'INTEGER' },
     fPostVAT: { public: true, type: 'INTEGER' },
     fVATCode: { public: true, type: 'TEXT' },
     fCashCollection: { public: true, type: 'INTEGER' },
     fDefPM: { public: true, type: 'TEXT' },
     fDefCorspCode: { public: true, type: 'TEXT' },
     fPMControl: { public: true, type: 'INTEGER' },
     fChronologyforCLNo: { public: true, type: 'INTEGER' },
     fCLOutTransBankPerRow: { public: true, type: 'INTEGER' } } }