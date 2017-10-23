module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fLocOKNr: { public: true, type: 'FLOAT' },
     fIntYc: { public: true, type: 'INTEGER' },
     fTransNr: { public: true, type: 'INTEGER' },
     fRowNr: { public: true, type: 'INTEGER' },
     fInQuant: { public: true, type: 'FLOAT' } },
  indexes: 
   { ArtCodeIndex373: 
      { fields: [ 'fArtCode', 'fIntYc', 'fTransNr', 'fRowNr' ],
        indicesType: 'UNIQUE' } } }