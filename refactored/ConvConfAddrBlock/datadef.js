module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ConvConfAddrBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fOldAddr: { public: true, type: 'TEXT' },
           fNewAddr: { public: true, type: 'TEXT' } } } } }