module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fDeviceType: { public: true, type: 'INTEGER' },
     fLocalMachineCode: { public: true, type: 'TEXT' },
     fPrinter: { public: true, type: 'INTEGER' },
     fPort: { public: true, type: 'TEXT' },
     fBaudRate: { public: true, type: 'INTEGER' },
     fByteSize: { public: true, type: 'INTEGER' },
     fParity: { public: true, type: 'INTEGER' },
     fStopBits: { public: true, type: 'INTEGER' },
     fCodepage: { public: true, type: 'TEXT' },
     fFlowControl: { public: true, type: 'INTEGER' },
     fEscSeqBefore: { public: true, type: 'TEXT' },
     fEscSeqAfter: { public: true, type: 'TEXT' },
     fFailureCode: { public: true, type: 'TEXT' },
     fUseHttps: { public: true, type: 'INTEGER' },
     fPassword: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex664: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }