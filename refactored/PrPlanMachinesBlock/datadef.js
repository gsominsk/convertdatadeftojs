module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     PrPlanMachinesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fATCode: { public: true, type: 'TEXT' },
           fATName: { public: true, type: 'TEXT' },
           fStatus: { public: true, type: 'TEXT' } } } } }