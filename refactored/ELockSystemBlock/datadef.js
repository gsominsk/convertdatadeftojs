module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fElectronicLockingSystemType: { public: true, type: 'INTEGER' },
     fELockSystemServerIP: { public: true, type: 'TEXT' },
     fELockSystemServerPort: { public: true, type: 'INTEGER' },
     fLogComm: { public: true, type: 'INTEGER' } } }