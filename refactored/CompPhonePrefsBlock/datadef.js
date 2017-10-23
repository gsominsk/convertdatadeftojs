module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fIntPrefix: { public: true, type: 'TEXT' },
     fCountryCode: { public: true, type: 'TEXT' },
     fDefAreaCode: { public: true, type: 'TEXT' },
     fSkipDigit: { public: true, type: 'TEXT' } } }