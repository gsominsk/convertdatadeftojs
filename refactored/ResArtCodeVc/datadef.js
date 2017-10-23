module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fResType: { public: true, type: 'TEXT' },
     fResUsageCode: { public: true, type: 'TEXT' },
     fWeekPart: { public: true, type: 'INTEGER' },
     fArtCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fXQtyConv: { public: true, type: 'TEXT' },
     fPriceForWholeRoom: { public: true, type: 'INTEGER' },
     fCClassDCode: { public: true, type: 'TEXT' },
     fPriceRules: { public: true, type: 'TEXT' },
     fNoOfGuests: { public: true, type: 'INTEGER' } },
  indexes: 
   { ResTypeIndex297: 
      { fields: [ 'fResType', 'fResUsageCode', 'fWeekPart', 'fNoOfGuests' ],
        indicesType: 'UNIQUE' } } }