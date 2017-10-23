module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     AutVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccNumber: { public: true, type: 'TEXT' },
           fObjstr: { public: true, type: 'TEXT' },
           fComstr: { public: true, type: 'TEXT' },
           fDstr: { public: true, type: 'FLOAT' },
           fCstr: { public: true, type: 'FLOAT' },
           fVATCode: { public: true, type: 'TEXT' },
           fTaxTemplateCode: { public: true, type: 'TEXT' } } },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDontSwap: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex2: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }