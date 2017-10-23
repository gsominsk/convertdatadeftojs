module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ShareVcSetBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fVcName: { public: true, type: 'TEXT' },
           fTyp: { public: true, type: 'INTEGER' },
           fForCompanies: { public: true, type: 'TEXT' },
           fInCompany: { public: true, type: 'TEXT' } } } } }