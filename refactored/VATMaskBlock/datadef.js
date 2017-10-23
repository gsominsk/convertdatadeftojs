module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     VATMaskBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCountryCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fVATMask: { public: true, type: 'TEXT' },
           fVATLaw: { public: true, type: 'INTEGER' } } } } }