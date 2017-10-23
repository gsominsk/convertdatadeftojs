module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fAgreeTypeCode: { public: true, type: 'TEXT' },
     fInvItemCode: { public: true, type: 'TEXT' },
     fUseItemCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fUseThisPrice: { public: true, type: 'FLOAT' },
     fUseThisQty: { public: true, type: 'FLOAT' } },
  indexes: 
   { InvItemCodeIndex365: 
      { fields: [ 'fInvItemCode', 'fAgreeTypeCode' ],
        indicesType: 'UNIQUE' } } }