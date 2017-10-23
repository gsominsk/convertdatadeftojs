module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PrintGroupBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fPrintGroupCode: { public: true, type: 'TEXT' },
           fLocation: { public: true, type: 'TEXT' },
           fPrinterName: { public: true, type: 'TEXT' },
           fESCSeq: { public: true, type: 'TEXT' },
           fPortNr: { public: true, type: 'INTEGER' } } } } }