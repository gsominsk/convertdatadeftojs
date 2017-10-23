module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fNrOfMonth: { public: true, type: 'FLOAT' },
     fDefArtMode: { public: true, type: 'INTEGER' },
     fDefInvNotDel: { public: true, type: 'INTEGER' },
     fDefNotInv: { public: true, type: 'INTEGER' },
     fDefPartDel: { public: true, type: 'INTEGER' },
     fDefFinnished: { public: true, type: 'INTEGER' },
     fDefDelNotInv: { public: true, type: 'INTEGER' } } }