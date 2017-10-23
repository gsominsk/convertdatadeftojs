module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fSerialNr: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fGroup: { public: true, type: 'TEXT' },
     fIncludeRecepy: { public: true, type: 'TEXT' },
     fValue: { public: true, type: 'FLOAT' },
     fExportedFlag: { public: true, type: 'INTEGER' },
     fPricePer: { public: true, type: 'INTEGER' },
     fBarCode: { public: true, type: 'TEXT' },
     fTerminated: { public: true, type: 'INTEGER' },
     fInventoryNr: { public: true, type: 'TEXT' },
     fCheckupDays: { public: true, type: 'INTEGER' },
     fNextCheckup: { public: true, type: 'DATE' },
     fLastCheckup: { public: true, type: 'DATE' },
     fOrgLocation: { public: true, type: 'TEXT' },
     fRentINStatus: { public: true, type: 'INTEGER' },
     fPLCode: { public: true, type: 'TEXT' },
     fInvItem: { public: true, type: 'TEXT' },
     fInvItemName: { public: true, type: 'TEXT' },
     fVECode: { public: true, type: 'TEXT' },
     fPurchaseDate: { public: true, type: 'DATE' },
     fWarrantyUntil: { public: true, type: 'DATE' },
     fApxBasePrice: { public: true, type: 'FLOAT' },
     fRecepyItem: { public: true, type: 'INTEGER' },
     fObjects: { public: true, type: 'TEXT' },
     fAgreeType: { public: true, type: 'TEXT' },
     RentINVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fLangCode: { public: true, type: 'TEXT' },
           fText: { public: true, type: 'TEXT' } } } },
  indexes: { CodeIndex346: { fields: [ 'fCode', 'fSerialNr' ], indicesType: 'UNIQUE' } } }