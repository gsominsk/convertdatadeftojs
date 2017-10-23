module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPerType: { public: true, type: 'INTEGER' },
     fPerLength: { public: true, type: 'INTEGER' },
     fInvDtype: { public: true, type: 'INTEGER' },
     fInvDays: { public: true, type: 'INTEGER' },
     fNormalFactor: { public: true, type: 'FLOAT' },
     fContractClass: { public: true, type: 'TEXT' } } }