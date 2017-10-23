module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAcceptanceGroup: { public: true, type: 'TEXT' },
     fForceAcceptVI: { public: true, type: 'INTEGER' },
     fForceAcceptComment: { public: true, type: 'INTEGER' },
     fForceRejectComment: { public: true, type: 'INTEGER' },
     fAllowAcceptRowByNext: { public: true, type: 'INTEGER' },
     fForceAcceptPO: { public: true, type: 'INTEGER' },
     fForceAcceptIntOR: { public: true, type: 'INTEGER' },
     fSuperUser: { public: true, type: 'TEXT' },
     fReAssignRules: { public: true, type: 'INTEGER' } } }