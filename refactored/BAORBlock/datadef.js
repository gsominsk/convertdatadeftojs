module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSMS: { public: true, type: 'INTEGER' },
     fLImit: { public: true, type: 'FLOAT' },
     fLTxtCode: { public: true, type: 'TEXT' },
     fCClass: { public: true, type: 'TEXT' },
     fORClass: { public: true, type: 'TEXT' } } }