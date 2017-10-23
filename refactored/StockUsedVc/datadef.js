module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fArtCode: { public: true, type: 'TEXT' },
     fLocation: { public: true, type: 'TEXT' },
     fIntYc: { public: true, type: 'INTEGER' },
     fTransNr: { public: true, type: 'INTEGER' },
     fRowNr: { public: true, type: 'INTEGER' },
     fRecepy: { public: true, type: 'TEXT' },
     fRecRowNr: { public: true, type: 'INTEGER' },
     fFromIntYc: { public: true, type: 'INTEGER' },
     fFromTransNr: { public: true, type: 'INTEGER' },
     fFromRowNr: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'INTEGER' },
     fInQuant: { public: true, type: 'FLOAT' },
     fOutQuant: { public: true, type: 'FLOAT' },
     fLocOKNr: { public: true, type: 'FLOAT' } },
  indexes: 
   { ArtCodeIndex372: 
      { fields: 
         [ 'fArtCode',
           'fIntYc',
           'fTransNr',
           'fRowNr',
           'fRecepy',
           'fRecRowNr',
           'fFromIntYc',
           'fFromTransNr',
           'fFromRowNr' ],
        indicesType: 'UNIQUE' } } }