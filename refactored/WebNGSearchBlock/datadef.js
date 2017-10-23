module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSearchInCode: { public: true, type: 'INTEGER' },
     fSearchInEANCode: { public: true, type: 'INTEGER' },
     fSearchInGroup: { public: true, type: 'INTEGER' },
     fSearchInName: { public: true, type: 'INTEGER' },
     fSearchInDetails: { public: true, type: 'INTEGER' },
     fSearchInCategory: { public: true, type: 'INTEGER' } } }