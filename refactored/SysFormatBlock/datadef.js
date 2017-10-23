module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fDateOrder: { public: true, type: 'INTEGER' },
     fLeadZday: { public: true, type: 'INTEGER' },
     fLeadZmonth: { public: true, type: 'INTEGER' },
     fCentury: { public: true, type: 'INTEGER' },
     fDateSep: { public: true, type: 'TEXT' },
     fDecimalPt: { public: true, type: 'TEXT' },
     fThousSep: { public: true, type: 'TEXT' } } }