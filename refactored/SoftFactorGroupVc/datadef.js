module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     SoftFactorGroupVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fEmployeeCode: { public: true, type: 'TEXT' },
           fEmployeeName: { public: true, type: 'TEXT' },
           fStartDate: { public: true, type: 'DATE' },
           fEndDate: { public: true, type: 'DATE' } } } },
  indexes: { UserCodeIndex575: { fields: [ 'fUserCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }