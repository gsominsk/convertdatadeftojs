module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fLastReplyMail: { public: true, type: 'INTEGER' },
     fLastReplyDate: { public: true, type: 'DATE' },
     fLastReplyTime: { public: true, type: 'TIME' },
     fAnsweredFlag: { public: true, type: 'INTEGER' },
     fRootConf: { public: true, type: 'TEXT' },
     fMotherConf: { public: true, type: 'INTEGER' },
     fHidden: { public: true, type: 'INTEGER' } },
  indexes: { SerNrIndex853: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }