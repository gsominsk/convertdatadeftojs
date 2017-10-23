module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fXMLElement: { public: true, type: 'TEXT' },
     fFieldName: { public: true, type: 'TEXT' },
     fFieldType: { public: true, type: 'INTEGER' },
     fReportType: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex702: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }