module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CrspAccBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fAccGroup: { public: true, type: 'TEXT' },
           fDebAccGroup: { public: true, type: 'TEXT' },
           fCredAccGroup: { public: true, type: 'TEXT' } } } } }