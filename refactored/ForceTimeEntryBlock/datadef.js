module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fStartDate: { public: true, type: 'DATE' },
     fWarnDays: { public: true, type: 'INTEGER' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' } } }