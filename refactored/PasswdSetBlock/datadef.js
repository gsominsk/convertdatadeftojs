module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMinPasswdLen: { public: true, type: 'INTEGER' },
     fCheckOldPasswd: { public: true, type: 'INTEGER' },
     fCapitalInPasswd: { public: true, type: 'INTEGER' },
     fDigitInPasswd: { public: true, type: 'INTEGER' },
     fPasswdChangeDays: { public: true, type: 'INTEGER' } } }