module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEventType: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fResCode: { public: true, type: 'TEXT' } },
  indexes: { EventTypeIndex669: { fields: [ 'fEventType', 'fResCode' ], indicesType: 'UNIQUE' } } }