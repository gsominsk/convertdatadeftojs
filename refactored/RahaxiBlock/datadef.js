module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRahaxiServerIP: { public: true, type: 'TEXT' },
     fRahaxiServerPort: { public: true, type: 'INTEGER' },
     fTerminalType: { public: true, type: 'INTEGER' },
     fTerminalBaudRate: { public: true, type: 'INTEGER' },
     fPrintRetailer: { public: true, type: 'INTEGER' },
     fNoSignature: { public: true, type: 'INTEGER' },
     fLogComm: { public: true, type: 'INTEGER' },
     fPrintReceipt: { public: true, type: 'INTEGER' },
     fCutReceipt: { public: true, type: 'INTEGER' } } }