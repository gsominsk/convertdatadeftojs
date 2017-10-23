module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRepname: { public: true, type: 'TEXT' },
     fCritname: { public: true, type: 'TEXT' },
     fDefname: { public: true, type: 'TEXT' },
     fModname: { public: true, type: 'TEXT' },
     fShortname: { public: true, type: 'TEXT' },
     FormDefVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fUserGroup: { public: true, type: 'TEXT' },
           fSerNr: { public: true, type: 'INTEGER' },
           fFPCode: { public: true, type: 'TEXT' },
           fPrintGroupCode: { public: true, type: 'TEXT' },
           fIntdocnr: { public: true, type: 'INTEGER' },
           fEformCode: { public: true, type: 'TEXT' },
           fTyp: { public: true, type: 'INTEGER' } } } },
  indexes: { repnameIndex166: { fields: [ 'fRepname', 'fShortname' ], indicesType: 'UNIQUE' } } }