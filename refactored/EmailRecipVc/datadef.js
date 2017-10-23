module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMainContactCode: { public: true, type: 'TEXT' },
     fMainContactName: { public: true, type: 'TEXT' },
     EmailRecipVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fDocType: { public: true, type: 'INTEGER' },
           fContactCode: { public: true, type: 'TEXT' },
           fContactName: { public: true, type: 'TEXT' },
           fRowTyp: { public: true, type: 'INTEGER' } } } },
  indexes: { MainContactCodeIndex754: { fields: [ 'fMainContactCode' ], indicesType: 'UNIQUE' } } }