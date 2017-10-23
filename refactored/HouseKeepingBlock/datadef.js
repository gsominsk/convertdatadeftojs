module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCleaningType: { public: true, type: 'TEXT' },
     fMaintenanceType: { public: true, type: 'TEXT' },
     fCleanerDispGr: { public: true, type: 'TEXT' },
     fCleanResultType: { public: true, type: 'TEXT' },
     fCleanTypeCheckin: { public: true, type: 'TEXT' },
     fCleanTypeCheckout: { public: true, type: 'TEXT' },
     fMessCheckin: { public: true, type: 'TEXT' },
     fMessCheckout: { public: true, type: 'TEXT' },
     fSheetChangeDays: { public: true, type: 'INTEGER' } } }