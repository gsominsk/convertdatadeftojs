module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fHeader: { public: true, type: 'TEXT' },
     fFirstTxt: { public: true, type: 'TEXT' },
     fLastTxt: { public: true, type: 'TEXT' },
     fPasswordHeader: { public: true, type: 'TEXT' },
     fPasswordFirstTxt: { public: true, type: 'TEXT' },
     fPasswordLastTxt: { public: true, type: 'TEXT' },
     fORHeader: { public: true, type: 'TEXT' },
     fORFirstTxt: { public: true, type: 'TEXT' },
     fORLastTxt: { public: true, type: 'TEXT' },
     fORMail: { public: true, type: 'INTEGER' },
     fSHHeader: { public: true, type: 'TEXT' },
     fSHFirstTxt: { public: true, type: 'TEXT' },
     fSHLastTxt: { public: true, type: 'TEXT' },
     fSHMail: { public: true, type: 'INTEGER' },
     fIVHeader: { public: true, type: 'TEXT' },
     fIVFirstTxt: { public: true, type: 'TEXT' },
     fIVLastTxt: { public: true, type: 'TEXT' },
     fIVMail: { public: true, type: 'INTEGER' },
     fRegLetID: { public: true, type: 'TEXT' },
     fPasswordLetID: { public: true, type: 'TEXT' },
     fOrderLetID: { public: true, type: 'TEXT' },
     fInvoiceLetID: { public: true, type: 'TEXT' },
     fShipLetID: { public: true, type: 'TEXT' },
     fPrintOrder: { public: true, type: 'INTEGER' },
     fPrintShip: { public: true, type: 'INTEGER' },
     fPrintInvoice: { public: true, type: 'INTEGER' } } }