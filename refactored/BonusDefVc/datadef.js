module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fUserName: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fCustCat: { public: true, type: 'TEXT' },
     fInclVAT: { public: true, type: 'INTEGER' },
     BonusDefVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fItemCode: { public: true, type: 'TEXT' },
           fBonusPrc: { public: true, type: 'FLOAT' },
           fCodeType: { public: true, type: 'INTEGER' } } },
     fPLBasedOn: { public: true, type: 'INTEGER' },
     fBonusPrc: { public: true, type: 'FLOAT' } },
  indexes: 
   { UserCustIndex288: 
      { fields: [ 'fUserCode', 'fCustCode', 'fCustCat' ],
        indicesType: 'UNIQUE' } } }