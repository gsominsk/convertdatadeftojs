module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fVersion: { public: true, type: 'INTEGER' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fClass: { public: true, type: 'TEXT' },
     fCreateDate: { public: true, type: 'DATE' },
     fOKDate: { public: true, type: 'DATE' },
     fSign: { public: true, type: 'TEXT' },
     SalesForecastVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItemCode: { public: true, type: 'TEXT' },
           fSpec: { public: true, type: 'TEXT' },
           fQty: { public: true, type: 'FLOAT' },
           fSum: { public: true, type: 'FLOAT' } } },
     fRowType: { public: true, type: 'INTEGER' } },
  indexes: 
   { CodeIndex517: 
      { fields: [ 'fCode', 'fClass', 'fVersion' ],
        indicesType: 'UNIQUE' } } }