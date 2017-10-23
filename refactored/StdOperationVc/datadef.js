module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDurTime: { public: true, type: 'TIME' },
     fDurDays: { public: true, type: 'INTEGER' },
     fMachineGroup: { public: true, type: 'TEXT' },
     fDisplayGroup: { public: true, type: 'TEXT' },
     StdOperationVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fComment: { public: true, type: 'TEXT' },
           fMaterial: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' },
           fUnitCode: { public: true, type: 'TEXT' } } },
     fMath2: { public: true, type: 'TEXT' },
     fBatchTime: { public: true, type: 'INTEGER' },
     fIssueItemsForNextSequence: { public: true, type: 'INTEGER' },
     fSetupTime: { public: true, type: 'TIME' },
     fQueueTime: { public: true, type: 'TIME' },
     fMoveTime: { public: true, type: 'TIME' },
     fRunTime: { public: true, type: 'TIME' },
     fMachine: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex531: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }