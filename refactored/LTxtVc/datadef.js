module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fMath: { public: true, type: 'TEXT' },
     fHtmlTemplate: { public: true, type: 'TEXT' },
     fHtmlFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex153: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }