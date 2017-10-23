module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CustomsDefaultBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fSignature: { public: true, type: 'TEXT' },
           fInsurancePrc: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } } }