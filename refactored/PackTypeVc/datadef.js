module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fWidth: { public: true, type: 'FLOAT' },
     fHeight: { public: true, type: 'FLOAT' },
     fLength: { public: true, type: 'FLOAT' },
     fMeasurementSystem: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex7: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }