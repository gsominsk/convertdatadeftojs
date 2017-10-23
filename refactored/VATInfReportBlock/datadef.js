module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLimitSL: { public: true, type: 'FLOAT' },
     fLimitPL: { public: true, type: 'FLOAT' },
     fVATReportDef: { public: true, type: 'TEXT' },
     fObjType: { public: true, type: 'TEXT' } } }