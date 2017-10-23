module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFromRecidStr: { public: true, type: 'TEXT' },
     fToRecidStr: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDepType: { public: true, type: 'INTEGER' },
     fLinkType: { public: true, type: 'INTEGER' } },
  indexes: 
   { MainKeyIndex260: 
      { fields: [ 'fFromRecidStr', 'fToRecidStr' ],
        indicesType: 'UNIQUE' } } }