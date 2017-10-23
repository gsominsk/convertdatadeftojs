module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     PriceRulesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fRestrictionType: { public: true, type: 'INTEGER' },
           fRestrictionOperator: { public: true, type: 'INTEGER' },
           fRestrictionCustClass: { public: true, type: 'TEXT' },
           fRestrictionOperand1: { public: true, type: 'INTEGER' },
           fRestrictionOperand2: { public: true, type: 'INTEGER' },
           fChargeArtCode: { public: true, type: 'TEXT' },
           fChargeType: { public: true, type: 'INTEGER' },
           fChargeCustClass: { public: true, type: 'TEXT' },
           fChargeOperator: { public: true, type: 'INTEGER' },
           fChargeOperand1: { public: true, type: 'INTEGER' },
           fChargeOperand2: { public: true, type: 'INTEGER' } } } },
  indexes: { CodeIndex711: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }