module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBaudRate: { public: true, type: 'INTEGER' },
     fByteSize: { public: true, type: 'INTEGER' },
     fParity: { public: true, type: 'INTEGER' },
     fStopBits: { public: true, type: 'INTEGER' },
     fOutCtsFlow: { public: true, type: 'INTEGER' },
     fOutDsrFlow: { public: true, type: 'INTEGER' },
     fDtrControl: { public: true, type: 'INTEGER' },
     fOutXOn: { public: true, type: 'INTEGER' },
     fOutXOff: { public: true, type: 'INTEGER' },
     fPrinter: { public: true, type: 'INTEGER' },
     fPort: { public: true, type: 'TEXT' },
     fCodepage: { public: true, type: 'TEXT' } } }