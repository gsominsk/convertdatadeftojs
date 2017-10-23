module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCompCode: { public: true, type: 'TEXT' },
     fNormNum: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' } },
  indexes: 
   { NormNumIndex581: 
      { fields: [ 'fNormNum', 'fCompCode', 'fCustCode' ],
        indicesType: 'UNIQUE' } } }