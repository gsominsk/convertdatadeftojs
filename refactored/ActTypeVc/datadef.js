module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fItemCode: { public: true, type: 'TEXT' },
     fActTypeGr: { public: true, type: 'TEXT' },
     fAlarmType: { public: true, type: 'INTEGER' },
     fAlarmWhen: { public: true, type: 'INTEGER' },
     fAlarmUnits: { public: true, type: 'INTEGER' },
     fAlarmToCCPersons: { public: true, type: 'INTEGER' },
     fCompTextType: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex112: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }