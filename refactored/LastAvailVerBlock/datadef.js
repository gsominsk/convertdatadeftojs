module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVersionBuild: { public: true, type: 'INTEGER' },
     fProgType: { public: true, type: 'INTEGER' },
     fLanguage: { public: true, type: 'TEXT' },
     fDBVersion: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fWhereIsIt: { public: true, type: 'TEXT' },
     fVersionSkipped: { public: true, type: 'INTEGER' },
     fLastAsked: { public: true, type: 'DATE' },
     fProductIdentifier: { public: true, type: 'TEXT' },
     fAdURL: { public: true, type: 'TEXT' } } }