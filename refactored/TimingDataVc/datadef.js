module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fUserCode: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fTime: { public: true, type: 'TIME' },
     fLength: { public: true, type: 'INTEGER' },
     fTransactions: { public: true, type: 'INTEGER' },
     fTimeInServer: { public: true, type: 'INTEGER' },
     fServerWait: { public: true, type: 'INTEGER' },
     fNetworkTime: { public: true, type: 'INTEGER' } },
  indexes: 
   { UserCodeIndex520: 
      { fields: [ 'fUserCode', 'fDate', 'fTime' ],
        indicesType: 'UNIQUE' } } }