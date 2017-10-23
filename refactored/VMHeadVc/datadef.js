module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fItemCode: { public: true, type: 'TEXT' },
     VMHeadVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fA: { public: true, type: 'TEXT' },
           fB: { public: true, type: 'TEXT' },
           fC: { public: true, type: 'TEXT' },
           fD: { public: true, type: 'TEXT' },
           fE: { public: true, type: 'TEXT' },
           fF: { public: true, type: 'TEXT' },
           fG: { public: true, type: 'TEXT' },
           fH: { public: true, type: 'TEXT' },
           fI: { public: true, type: 'TEXT' },
           fJ: { public: true, type: 'TEXT' },
           fK: { public: true, type: 'TEXT' },
           fL: { public: true, type: 'TEXT' },
           fM: { public: true, type: 'TEXT' },
           fN: { public: true, type: 'TEXT' },
           fO: { public: true, type: 'TEXT' },
           fP: { public: true, type: 'TEXT' },
           fQ: { public: true, type: 'TEXT' },
           fR: { public: true, type: 'TEXT' },
           fS: { public: true, type: 'TEXT' },
           fT: { public: true, type: 'TEXT' },
           fU: { public: true, type: 'TEXT' },
           fV: { public: true, type: 'TEXT' },
           fW: { public: true, type: 'TEXT' },
           fX: { public: true, type: 'TEXT' },
           fY: { public: true, type: 'TEXT' },
           fZ: { public: true, type: 'TEXT' } } } },
  indexes: { SerNrIndex412: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }