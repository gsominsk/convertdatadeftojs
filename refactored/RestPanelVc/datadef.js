module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fDepartment: { public: true, type: 'TEXT' },
     RestPanelVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDurationTime: { public: true, type: 'TIME' },
           fColnr: { public: true, type: 'INTEGER' } } } },
  indexes: 
   { CodeIndex819: 
      { fields: [ 'fCode', 'fBranchID', 'fDepartment' ],
        indicesType: 'UNIQUE' } } }