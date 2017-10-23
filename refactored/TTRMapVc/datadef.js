module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fRegister: { public: true, type: 'TEXT' },
     fField: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fFromRegister: { public: true, type: 'TEXT' },
     fFromFileName: { public: true, type: 'TEXT' },
     fRowType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex496: { fields: [ 'fCode', 'fFileName' ], indicesType: 'UNIQUE' } } }