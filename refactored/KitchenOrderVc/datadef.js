module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fTransTime: { public: true, type: 'TIME' },
     fComment: { public: true, type: 'TEXT' },
     fBranchID: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fRestAccSerNr: { public: true, type: 'INTEGER' },
     fSerNrPerBranch: { public: true, type: 'INTEGER' },
     fMachineName: { public: true, type: 'TEXT' },
     KitchenOrderVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fArtCode: { public: true, type: 'TEXT' },
           fQuant: { public: true, type: 'FLOAT' },
           fSpec: { public: true, type: 'TEXT' },
           fRestAccRow: { public: true, type: 'INTEGER' },
           fOvst: { public: true, type: 'INTEGER' },
           fMealCourse: { public: true, type: 'TEXT' },
           fDelivered: { public: true, type: 'INTEGER' },
           fKitchenDepartment: { public: true, type: 'TEXT' },
           fDishStatus: { public: true, type: 'TEXT' } } },
     fEndDate: { public: true, type: 'DATE' },
     fEndTime: { public: true, type: 'TIME' },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     fInvalid: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex755: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }