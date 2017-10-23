module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fInternal: { public: true, type: 'TEXT' },
     fResCode: { public: true, type: 'TEXT' },
     fWakeUp: { public: true, type: 'TIME' },
     fOutCalls: { public: true, type: 'INTEGER' },
     fVoiceMes: { public: true, type: 'INTEGER' },
     fSaveCons: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     fDepartment: { public: true, type: 'TEXT' } },
  indexes: { InternalIndex267: { fields: [ 'fInternal' ], indicesType: 'UNIQUE' } } }