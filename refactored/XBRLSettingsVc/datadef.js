module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fReportType: { public: true, type: 'INTEGER' },
     XBRLSettingsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fXBRLElement: { public: true, type: 'TEXT' },
           fFieldName: { public: true, type: 'TEXT' },
           fFieldType: { public: true, type: 'INTEGER' },
           fUserDefRep: { public: true, type: 'TEXT' },
           fUserDefRepRow: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fReverseSign: { public: true, type: 'INTEGER' },
           fFieldFormula: { public: true, type: 'TEXT' } } } },
  indexes: { ReportTypeIndex703: { fields: [ 'fReportType' ], indicesType: 'UNIQUE' } } }