module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInventoryNr: { public: true, type: 'TEXT' },
     fCurDepartment: { public: true, type: 'TEXT' },
     fCurPerson: { public: true, type: 'TEXT' },
     fCurQuant: { public: true, type: 'FLOAT' } },
  indexes: 
   { MainKeyIndex254: 
      { fields: [ 'fInventoryNr', 'fCurDepartment' ],
        indicesType: 'UNIQUE' } } }