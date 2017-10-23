module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPONr: { public: true, type: 'INTEGER' },
     fOrdRow: { public: true, type: 'INTEGER' },
     fPUQuant: { public: true, type: 'FLOAT' },
     fPUAmount: { public: true, type: 'FLOAT' },
     fVIQuant: { public: true, type: 'FLOAT' },
     fVIAmount: { public: true, type: 'FLOAT' },
     fDoneQuant: { public: true, type: 'FLOAT' },
     fDoneAmount: { public: true, type: 'FLOAT' },
     fPUBaseAmount: { public: true, type: 'FLOAT' },
     fVIBaseAmount: { public: true, type: 'FLOAT' } },
  indexes: { MainKeyIndex447: { fields: [ 'fPONr', 'fOrdRow' ], indicesType: 'UNIQUE' } } }