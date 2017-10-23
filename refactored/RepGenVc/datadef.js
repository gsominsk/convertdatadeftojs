module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fXxinModule: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fComment: { public: true, type: 'TEXT' },
     fMainLoopVc: { public: true, type: 'TEXT' },
     fMainKey: { public: true, type: 'TEXT' },
     RepGenVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fStp: { public: true, type: 'INTEGER' },
           fCond1: { public: true, type: 'TEXT' },
           fOper: { public: true, type: 'TEXT' },
           fCond2: { public: true, type: 'TEXT' },
           fRj: { public: true, type: 'INTEGER' },
           fCol1: { public: true, type: 'INTEGER' },
           fCol2: { public: true, type: 'INTEGER' },
           fVPos: { public: true, type: 'INTEGER' },
           fType: { public: true, type: 'INTEGER' },
           fXxSetType: { public: true, type: 'INTEGER' },
           fSetno: { public: true, type: 'INTEGER' },
           fDirf: { public: true, type: 'INTEGER' },
           fRecord: { public: true, type: 'TEXT' },
           fKey: { public: true, type: 'TEXT' },
           fSectionType: { public: true, type: 'INTEGER' },
           fBaseLine: { public: true, type: 'FLOAT' },
           fS3: { public: true, type: 'TEXT' },
           fS4: { public: true, type: 'TEXT' },
           fS5: { public: true, type: 'TEXT' },
           fS6: { public: true, type: 'TEXT' },
           fLineHeight: { public: true, type: 'FLOAT' },
           fDrillf: { public: true, type: 'INTEGER' },
           fH: { public: true, type: 'INTEGER' },
           fV: { public: true, type: 'INTEGER' },
           fL: { public: true, type: 'INTEGER' },
           fRowtyp: { public: true, type: 'INTEGER' },
           fL1: { public: true, type: 'INTEGER' },
           fL2: { public: true, type: 'INTEGER' },
           fL3: { public: true, type: 'INTEGER' },
           fL4: { public: true, type: 'INTEGER' },
           fL5: { public: true, type: 'INTEGER' },
           fF1: { public: true, type: 'INTEGER' },
           fF2: { public: true, type: 'INTEGER' },
           fF3: { public: true, type: 'INTEGER' },
           fF4: { public: true, type: 'INTEGER' },
           fF5: { public: true, type: 'INTEGER' } } },
     fMedia: { public: true, type: 'INTEGER' },
     fJobDf: { public: true, type: 'INTEGER' },
     fWidth: { public: true, type: 'INTEGER' },
     fScaling: { public: true, type: 'INTEGER' },
     fSpecWinWidth: { public: true, type: 'INTEGER' },
     fSpecWinHeigth: { public: true, type: 'INTEGER' },
     fSkipHeader: { public: true, type: 'INTEGER' },
     fApp: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex344: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }