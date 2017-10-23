module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     LMOpenedWindowsBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fWClass: { public: true, type: 'TEXT' },
           fRecidStr: { public: true, type: 'TEXT' } } } } }