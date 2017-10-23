module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMotherCode: { public: true, type: 'TEXT' },
     fConsCrncy: { public: true, type: 'INTEGER' },
     fReportingExchangeRates: { public: true, type: 'INTEGER' } } }