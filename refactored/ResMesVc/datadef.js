module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     ResMesVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fTextCode: { public: true, type: 'TEXT' } } },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex296: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }