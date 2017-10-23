module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fMainPersons: { public: true, type: 'TEXT' },
     fCost: { public: true, type: 'FLOAT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartTime: { public: true, type: 'TIME' },
     fEndTime: { public: true, type: 'TIME' },
     fNrEvent: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' },
     fVECode: { public: true, type: 'TEXT' },
     fVEName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fComment1: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fResCode: { public: true, type: 'TEXT' },
     fMaxQty: { public: true, type: 'INTEGER' },
     fRoute: { public: true, type: 'TEXT' },
     fVehicleNr: { public: true, type: 'TEXT' },
     fDirection: { public: true, type: 'INTEGER' },
     fExcurType: { public: true, type: 'TEXT' },
     TransferVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fJobNr: { public: true, type: 'INTEGER' },
           fGuestCode: { public: true, type: 'TEXT' },
           fGuestName: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex338: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }