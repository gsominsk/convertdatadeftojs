module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fPop3Serv: { public: true, type: 'TEXT' },
     fInternalName: { public: true, type: 'TEXT' },
     fField: { public: true, type: 'TEXT' },
     fMatchText: { public: true, type: 'TEXT' },
     fPriority: { public: true, type: 'INTEGER' },
     fSetPrio: { public: true, type: 'INTEGER' },
     fFullHeader: { public: true, type: 'INTEGER' },
     fKeepOriginalAddress: { public: true, type: 'INTEGER' } },
  indexes: 
   { Pop3ServIndex205: 
      { fields: [ 'fPop3Serv', 'fInternalName', 'fMatchText', 'fPriority' ],
        indicesType: 'UNIQUE' } } }