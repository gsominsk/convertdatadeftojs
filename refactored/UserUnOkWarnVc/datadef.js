module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fIVWarn: { public: true, type: 'INTEGER' },
     fIPWarn: { public: true, type: 'INTEGER' },
     fVIWarn: { public: true, type: 'INTEGER' },
     fOPWarn: { public: true, type: 'INTEGER' },
     fPUWarn: { public: true, type: 'INTEGER' },
     fSHWarn: { public: true, type: 'INTEGER' },
     fStockMovWarn: { public: true, type: 'INTEGER' },
     fSDWarn: { public: true, type: 'INTEGER' },
     fRetWarn: { public: true, type: 'INTEGER' },
     fRetPUWarn: { public: true, type: 'INTEGER' },
     fCLInWarn: { public: true, type: 'INTEGER' },
     fCLOutWarn: { public: true, type: 'INTEGER' } },
  indexes: { UserCodeIndex710: { fields: [ 'fUserCode' ], indicesType: 'UNIQUE' } } }