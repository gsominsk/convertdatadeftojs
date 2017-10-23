module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fFieldType: { public: true, type: 'INTEGER' },
     fFiller: { public: true, type: 'TEXT' },
     fPLBasedOn: { public: true, type: 'INTEGER' },
     fPreventDelivery: { public: true, type: 'INTEGER' },
     fForcePlanDelDate: { public: true, type: 'INTEGER' } } }