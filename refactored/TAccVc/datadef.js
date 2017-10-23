module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fTAccNumber: { public: true, type: 'TEXT' },
     fAccNumber: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fGroup: { public: true, type: 'TEXT' },
     fAccType: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fObject: { public: true, type: 'TEXT' },
     fOTCode: { public: true, type: 'TEXT' },
     fNVD: { public: true, type: 'INTEGER' },
     fNVC: { public: true, type: 'INTEGER' } },
  indexes: { TAccNumberIndex494: { fields: [ 'fTAccNumber' ], indicesType: 'UNIQUE' } } }