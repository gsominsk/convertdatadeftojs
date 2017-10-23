module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEnableCharging: { public: true, type: 'INTEGER' },
     fChargeMethod: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fPulsPrice: { public: true, type: 'FLOAT' },
     fPbxComPort: { public: true, type: 'TEXT' },
     fPbxBaudRate: { public: true, type: 'INTEGER' },
     fPbxParity: { public: true, type: 'INTEGER' },
     fPbxBits: { public: true, type: 'INTEGER' },
     fPbxChkBit: { public: true, type: 'INTEGER' },
     fPbxType: { public: true, type: 'INTEGER' } } }