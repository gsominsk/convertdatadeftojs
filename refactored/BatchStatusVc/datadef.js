module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fWarning: { public: true, type: 'INTEGER' },
     fCreateSVO: { public: true, type: 'INTEGER' },
     fRentINStatus: { public: true, type: 'INTEGER' },
     fModNo: { public: true, type: 'TEXT' },
     fComment1: { public: true, type: 'TEXT' },
     fComment2: { public: true, type: 'TEXT' },
     fComment3: { public: true, type: 'TEXT' },
     fComment4: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex122: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }