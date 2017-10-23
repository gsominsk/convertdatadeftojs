module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fService: { public: true, type: 'TEXT' },
     fServiceName: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fDemoClicks: { public: true, type: 'INTEGER' },
     fBillWhenDemoClicksOver: { public: true, type: 'INTEGER' },
     fCountdownClicks: { public: true, type: 'INTEGER' },
     fCountdownLTxt: { public: true, type: 'TEXT' } },
  indexes: { ServiceIndex576: { fields: [ 'fService' ], indicesType: 'UNIQUE' } } }