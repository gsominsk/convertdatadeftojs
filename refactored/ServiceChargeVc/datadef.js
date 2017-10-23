module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMachineCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCovers: { public: true, type: 'INTEGER' },
     fChargeType: { public: true, type: 'INTEGER' },
     fChargePrc: { public: true, type: 'FLOAT' },
     fActivef: { public: true, type: 'INTEGER' } },
  indexes: { MachineCodeIndex512: { fields: [ 'fMachineCode' ], indicesType: 'UNIQUE' } } }