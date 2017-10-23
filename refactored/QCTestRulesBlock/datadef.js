module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     QCTestRulesBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCodeType: { public: true, type: 'INTEGER' },
           fITCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' },
           fReason: { public: true, type: 'TEXT' },
           fLocation: { public: true, type: 'TEXT' },
           fQCTemplate: { public: true, type: 'TEXT' },
           fVc: { public: true, type: 'INTEGER' },
           fOnOKRecord: { public: true, type: 'INTEGER' } } } } }