module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fOldPassWord: { public: true, type: 'TEXT' },
     fAccessGroup: { public: true, type: 'TEXT' },
     fCurOurContact: { public: true, type: 'TEXT' },
     fLastOrdNr: { public: true, type: 'INTEGER' },
     fLastShipNr: { public: true, type: 'INTEGER' },
     fLastInvNr: { public: true, type: 'INTEGER' },
     fLastPurNr: { public: true, type: 'INTEGER' },
     fLastPayNr: { public: true, type: 'INTEGER' },
     fLastTRNr: { public: true, type: 'INTEGER' },
     fLastVINr: { public: true, type: 'INTEGER' },
     fLastOPNr: { public: true, type: 'INTEGER' },
     fTerminatedFlag: { public: true, type: 'INTEGER' },
     fJob: { public: true, type: 'TEXT' },
     fJobGroup: { public: true, type: 'TEXT' },
     fDisAllowOther: { public: true, type: 'INTEGER' },
     UserVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fCode: { public: true, type: 'TEXT' },
           fPRCode: { public: true, type: 'TEXT' },
           fComment: { public: true, type: 'TEXT' } } },
     fLocation: { public: true, type: 'TEXT' },
     fMachines: { public: true, type: 'TEXT' },
     fTiller: { public: true, type: 'TEXT' },
     fBonus: { public: true, type: 'FLOAT' },
     fCUCode: { public: true, type: 'TEXT' },
     fCUName: { public: true, type: 'TEXT' },
     fPhone1: { public: true, type: 'TEXT' },
     fPhone2: { public: true, type: 'TEXT' },
     fFax1: { public: true, type: 'TEXT' },
     fFax2: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPersAcc: { public: true, type: 'TEXT' },
     fPersObjx: { public: true, type: 'TEXT' },
     fBankAcc: { public: true, type: 'TEXT' },
     fBankName: { public: true, type: 'TEXT' },
     fCostPrHour: { public: true, type: 'FLOAT' },
     fPricePrHour: { public: true, type: 'FLOAT' },
     fEmailAddr: { public: true, type: 'TEXT' },
     fIDCode: { public: true, type: 'TEXT' },
     fSpec: { public: true, type: 'TEXT' },
     fLimitedAccess: { public: true, type: 'INTEGER' },
     fNewPassWord: { public: true, type: 'INTEGER' },
     fLangCode: { public: true, type: 'TEXT' },
     fSalesGroup: { public: true, type: 'TEXT' },
     fDepartment: { public: true, type: 'TEXT' },
     fLastCLInNr: { public: true, type: 'INTEGER' },
     fLastCLOutNr: { public: true, type: 'INTEGER' },
     fFTPLogin: { public: true, type: 'INTEGER' },
     fWebConf: { public: true, type: 'TEXT' },
     fWebStartPage: { public: true, type: 'TEXT' },
     fCostAcc: { public: true, type: 'TEXT' },
     fLastIVCashNr: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fOnlyVoiceLogin: { public: true, type: 'INTEGER' },
     fUserEditCtlf: { public: true, type: 'INTEGER' },
     fDateOrder: { public: true, type: 'INTEGER' },
     fLeadingZDay: { public: true, type: 'INTEGER' },
     fLeadingZMonth: { public: true, type: 'INTEGER' },
     fLeadingCentury: { public: true, type: 'INTEGER' },
     fDateSep: { public: true, type: 'TEXT' },
     fDecimalPt: { public: true, type: 'TEXT' },
     fThousandSep: { public: true, type: 'TEXT' },
     fForceTimeEntry: { public: true, type: 'INTEGER' },
     fDateCreated: { public: true, type: 'DATE' },
     fSupervisor: { public: true, type: 'TEXT' },
     fOneFunction: { public: true, type: 'TEXT' },
     fTypeOfUser: { public: true, type: 'INTEGER' },
     fThousSepf: { public: true, type: 'INTEGER' },
     fCanUseOS: { public: true, type: 'INTEGER' },
     fMagic: { public: true, type: 'INTEGER' },
     fNewf: { public: true, type: 'INTEGER' },
     fLastTTRNr: { public: true, type: 'INTEGER' },
     fCustCode: { public: true, type: 'TEXT' },
     fWindowType: { public: true, type: 'INTEGER' },
     fRegistrationNumber: { public: true, type: 'INTEGER' },
     fStartLevel: { public: true, type: 'INTEGER' },
     fServLocation: { public: true, type: 'TEXT' },
     fReservLocAccess: { public: true, type: 'TEXT' },
     fReservLocation: { public: true, type: 'TEXT' },
     fMinPLCode: { public: true, type: 'TEXT' },
     fMagic2: { public: true, type: 'INTEGER' },
     fDiscPassword: { public: true, type: 'INTEGER' },
     fLastOfficialSerNr: { public: true, type: 'TEXT' },
     fLastDropSHNr: { public: true, type: 'INTEGER' },
     fPasswordNeverExpires: { public: true, type: 'INTEGER' },
     fLastRestAccNr: { public: true, type: 'INTEGER' },
     fLastPONr: { public: true, type: 'INTEGER' },
     fExpiryDate: { public: true, type: 'DATE' },
     fSortCode: { public: true, type: 'TEXT' },
     fUnlicensed: { public: true, type: 'INTEGER' },
     fAstPBXConnection: { public: true, type: 'TEXT' },
     fAstUserName: { public: true, type: 'TEXT' },
     fAstPassword: { public: true, type: 'TEXT' },
     fAstCallerIdNumber: { public: true, type: 'TEXT' },
     fXAstCallerIdName: { public: true, type: 'TEXT' },
     fExcludeQueueFallbackf: { public: true, type: 'INTEGER' },
     fLinPhonef: { public: true, type: 'INTEGER' },
     fLoginEmailAddr: { public: true, type: 'TEXT' },
     fAdminFlag: { public: true, type: 'INTEGER' },
     fSSHUsername: { public: true, type: 'TEXT' },
     fSSHClosed: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex5: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }