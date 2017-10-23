module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fStructNode: { public: true, type: 'INTEGER' },
     fDescriptTemplate: { public: true, type: 'TEXT' },
     fDescriptDivClass: { public: true, type: 'TEXT' },
     fTermsNode: { public: true, type: 'INTEGER' },
     fPayWithCC: { public: true, type: 'INTEGER' },
     fPayWithIV: { public: true, type: 'INTEGER' },
     fCoursePlanElement: { public: true, type: 'TEXT' },
     fApplyPageElement: { public: true, type: 'TEXT' } } }