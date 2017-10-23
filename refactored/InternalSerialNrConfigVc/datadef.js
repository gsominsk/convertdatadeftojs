module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMainItem: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fProgType: { public: true, type: 'INTEGER' },
     fMaintRequired: { public: true, type: 'INTEGER' },
     InternalSerialNrConfigVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fInit: { public: true, type: 'TEXT' },
           fMaint: { public: true, type: 'TEXT' },
           fMonths: { public: true, type: 'INTEGER' },
           fFreeMaintDays: { public: true, type: 'INTEGER' },
           fComment: { public: true, type: 'TEXT' } } },
     fProductCode: { public: true, type: 'TEXT' } },
  indexes: { MainItemIndex568: { fields: [ 'fMainItem' ], indicesType: 'UNIQUE' } } }