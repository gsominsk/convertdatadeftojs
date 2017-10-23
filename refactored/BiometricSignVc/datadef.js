module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fBiometricLogin: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fValidUntil: { public: true, type: 'DATE' },
     fSignature: { public: true, type: 'INTEGER' } },
  indexes: 
   { UserCodeIndex679: 
      { fields: [ 'fUserCode', 'fBiometricLogin' ],
        indicesType: 'UNIQUE' } } }