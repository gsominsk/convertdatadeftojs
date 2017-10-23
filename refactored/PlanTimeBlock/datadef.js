module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fJobChange: { public: true, type: 'INTEGER' },
     fFieldType: { public: true, type: 'INTEGER' },
     fFiller: { public: true, type: 'TEXT' },
     fLastResCode: { public: true, type: 'TEXT' } } }