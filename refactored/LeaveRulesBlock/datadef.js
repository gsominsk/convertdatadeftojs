module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAllowAboveBalance: { public: true, type: 'INTEGER' },
     fAllowAboveAllowance: { public: true, type: 'INTEGER' },
     fAutTransferBalance: { public: true, type: 'INTEGER' },
     fLeaveCalculationBase: { public: true, type: 'INTEGER' } } }