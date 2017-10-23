module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCustCat: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fPLCode: { public: true, type: 'TEXT' },
     RentalPriceListsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCustCode: { public: true, type: 'TEXT' },
           fCustCat: { public: true, type: 'TEXT' },
           fSite: { public: true, type: 'TEXT' },
           fPLCode: { public: true, type: 'TEXT' } } } },
  indexes: 
   { CodeIndex359: 
      { fields: [ 'fCode', 'fStartDate', 'fCustCat' ],
        indicesType: 'UNIQUE' } } }