module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     HWCOItemGroupBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fINGroup: { public: true, type: 'TEXT' },
           fAdminFeeFlag: { public: true, type: 'INTEGER' },
           fOnContractFlag: { public: true, type: 'INTEGER' },
           fMaintPeriodOnInvoice: { public: true, type: 'INTEGER' } } } } }