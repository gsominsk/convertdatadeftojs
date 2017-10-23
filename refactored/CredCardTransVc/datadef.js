module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSessionID: { public: true, type: 'INTEGER' },
     fCurrentCust: { public: true, type: 'TEXT' },
     fStatus: { public: true, type: 'INTEGER' },
     fCustOrderNr: { public: true, type: 'TEXT' },
     fStatusMessage: { public: true, type: 'TEXT' },
     fCallbackAction: { public: true, type: 'INTEGER' },
     fShipMode: { public: true, type: 'TEXT' },
     fCredCardType: { public: true, type: 'TEXT' },
     fDelAddrCode: { public: true, type: 'TEXT' },
     fCustOrdNr: { public: true, type: 'TEXT' },
     fOrderNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' } },
  indexes: 
   { SessionIDIndex473: 
      { fields: [ 'fSessionID', 'fCurrentCust' ],
        indicesType: 'UNIQUE' } } }