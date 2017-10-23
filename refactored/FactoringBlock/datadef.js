module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fBank: { public: true, type: 'INTEGER' },
     fLastDate: { public: true, type: 'DATE' },
     fLastSerNr: { public: true, type: 'INTEGER' },
     fIVSerNr: { public: true, type: 'INTEGER' },
     fUser: { public: true, type: 'TEXT' },
     fPassw: { public: true, type: 'TEXT' },
     fFactoringText: { public: true, type: 'TEXT' },
     fBankCode: { public: true, type: 'TEXT' } } }