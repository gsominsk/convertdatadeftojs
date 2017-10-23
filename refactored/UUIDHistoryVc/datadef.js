module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fForUUID: { public: true, type: 'TEXT' },
     fVcName: { public: true, type: 'TEXT' },
     fHistSeqNo: { public: true, type: 'INTEGER' },
     fOp: { public: true, type: 'INTEGER' },
     fOriginalImage: { public: true, type: 'INTEGER' },
     fDate: { public: true, type: 'DATE' },
     fTime: { public: true, type: 'TIME' },
     fUser: { public: true, type: 'TEXT' } },
  indexes: { ForUUIDIndex562: { fields: [ 'fForUUID', 'fHistSeqNo' ], indicesType: 'UNIQUE' } } }