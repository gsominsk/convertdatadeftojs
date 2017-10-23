module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDutiesCodes: { public: true, type: 'TEXT' },
     fCurncyCode: { public: true, type: 'TEXT' },
     CountryVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } },
     fRegion: { public: true, type: 'TEXT' },
     fNationality: { public: true, type: 'TEXT' },
     fFreightCode: { public: true, type: 'TEXT' },
     fPLCode: { public: true, type: 'TEXT' },
     fRebCode: { public: true, type: 'TEXT' },
     fObjects: { public: true, type: 'TEXT' },
     fExportFlag: { public: true, type: 'INTEGER' },
     fShowOnWeb: { public: true, type: 'INTEGER' },
     fISOCode: { public: true, type: 'TEXT' },
     fTaxOfficeCode: { public: true, type: 'TEXT' },
     fBillingTypePreference: { public: true, type: 'INTEGER' },
     fDefaultVATNr: { public: true, type: 'TEXT' },
     fDateOrder: { public: true, type: 'INTEGER' },
     fLeadZday: { public: true, type: 'INTEGER' },
     fLeadZmonth: { public: true, type: 'INTEGER' },
     fCentury: { public: true, type: 'INTEGER' },
     fDateSep: { public: true, type: 'TEXT' },
     fDecimalPt: { public: true, type: 'TEXT' },
     fThousSep: { public: true, type: 'TEXT' },
     fCountryEditCtlf: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex82: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }