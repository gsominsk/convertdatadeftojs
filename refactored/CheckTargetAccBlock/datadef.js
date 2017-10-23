module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CheckTargetAccBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccNr: { public: true, type: 'TEXT' },
           fTargetTyp: { public: true, type: 'INTEGER' } } } } }