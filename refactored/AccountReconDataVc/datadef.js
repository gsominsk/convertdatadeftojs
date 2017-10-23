module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fIntYc: { public: true, type: 'INTEGER' },
     fTransRow: { public: true, type: 'INTEGER' },
     fBankTRNr: { public: true, type: 'INTEGER' },
     fBankTRDate: { public: true, type: 'DATE' },
     fTransDate: { public: true, type: 'DATE' },
     fTypeRef: { public: true, type: 'TEXT' },
     fSum: { public: true, type: 'FLOAT' } } }