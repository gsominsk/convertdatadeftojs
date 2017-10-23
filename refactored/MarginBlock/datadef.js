module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     MarginBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fMin: { public: true, type: 'FLOAT' },
           fMax: { public: true, type: 'FLOAT' },
           fPrivMarg: { public: true, type: 'FLOAT' },
           fMuniMarg: { public: true, type: 'FLOAT' },
           fComment: { public: true, type: 'TEXT' } } } } }