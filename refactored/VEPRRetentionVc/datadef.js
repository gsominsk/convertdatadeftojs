module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVECode: { public: true, type: 'TEXT' },
     fPRCode: { public: true, type: 'TEXT' },
     fRetSum: { public: true, type: 'FLOAT' },
     fRetInvd: { public: true, type: 'FLOAT' } },
  indexes: { VECodeIndex672: { fields: [ 'fVECode', 'fPRCode' ], indicesType: 'UNIQUE' } } }