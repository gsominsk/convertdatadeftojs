module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHeader: { public: true, type: 'TEXT' },
     fFirstTxt: { public: true, type: 'TEXT' },
     fLastTxt: { public: true, type: 'TEXT' },
     fEmailSender: { public: true, type: 'TEXT' } } }