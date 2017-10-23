module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     CachedHostAddrBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fHost: { public: true, type: 'TEXT' },
           fAddr: { public: true, type: 'TEXT' },
           fOKFlag: { public: true, type: 'INTEGER' } } } } }