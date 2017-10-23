module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fNewTag: { public: true, type: 'TEXT' },
     fAnsweredTag: { public: true, type: 'TEXT' },
     fCorrectTag: { public: true, type: 'TEXT' },
     fUsefulTag: { public: true, type: 'TEXT' } } }