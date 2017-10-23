module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPatente: { public: true, type: 'TEXT' },
     fEngineNr: { public: true, type: 'TEXT' },
     fChasisNr: { public: true, type: 'TEXT' },
     fTitulo: { public: true, type: 'TEXT' },
     fAuthorization: { public: true, type: 'TEXT' },
     fDocNr: { public: true, type: 'TEXT' },
     fSegNr: { public: true, type: 'TEXT' },
     fSegAmount: { public: true, type: 'TEXT' },
     fDueSeg: { public: true, type: 'DATE' },
     fVECode: { public: true, type: 'TEXT' },
     fVEName: { public: true, type: 'TEXT' },
     fPerson: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fLastTI: { public: true, type: 'DATE' },
     fDueTI: { public: true, type: 'DATE' },
     fSits: { public: true, type: 'INTEGER' },
     fResCode: { public: true, type: 'TEXT' },
     fCompany: { public: true, type: 'TEXT' },
     fKMOil: { public: true, type: 'FLOAT' },
     fKMOilFilter: { public: true, type: 'FLOAT' },
     fKMOilBox: { public: true, type: 'FLOAT' },
     fKMWatFilter: { public: true, type: 'FLOAT' },
     fKMRefrig: { public: true, type: 'FLOAT' },
     fKMGasFilter: { public: true, type: 'FLOAT' },
     fKMRuedas: { public: true, type: 'FLOAT' },
     fKMActual: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex337: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }