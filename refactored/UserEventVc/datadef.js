module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fMailBoxNr: { public: true, type: 'INTEGER' },
     fLastLoginDate: { public: true, type: 'DATE' },
     fLastLoginTime: { public: true, type: 'TIME' },
     fLastLogoutDate: { public: true, type: 'DATE' },
     fLastLogoutTime: { public: true, type: 'TIME' },
     fLastLoginWebDate: { public: true, type: 'DATE' },
     fLastLoginWebTime: { public: true, type: 'TIME' },
     fLastLogoutWebDate: { public: true, type: 'DATE' },
     fLastLogoutWebTime: { public: true, type: 'TIME' },
     fLastLogout2Date: { public: true, type: 'DATE' },
     fLastLogout2Time: { public: true, type: 'TIME' },
     fLastIP: { public: true, type: 'TEXT' } },
  indexes: { MainKeyIndex207: { fields: [ 'fMailBoxNr' ], indicesType: 'UNIQUE' } } }