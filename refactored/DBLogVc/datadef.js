module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEventType: { public: true, type: 'INTEGER' },
     fEventDate: { public: true, type: 'DATE' },
     fEventTime: { public: true, type: 'TIME' },
     fDBSize: { public: true, type: 'INTEGER' },
     fFreeDiskSpace: { public: true, type: 'INTEGER' },
     fExtraSize: { public: true, type: 'INTEGER' },
     fExtraInfo: { public: true, type: 'TEXT' } },
  indexes: 
   { MainKeyIndex203: 
      { fields: [ 'fEventType', 'fEventDate', 'fEventTime' ],
        indicesType: 'UNIQUE' } } }