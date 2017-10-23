module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUsername: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fTestFlag: { public: true, type: 'INTEGER' },
     fTransQtyMonth: { public: true, type: 'INTEGER' },
     fPartner: { public: true, type: 'INTEGER' },
     fDemandContract: { public: true, type: 'INTEGER' },
     fGMTOffset: { public: true, type: 'INTEGER' },
     fUpdCustData: { public: true, type: 'INTEGER' } } }