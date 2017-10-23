module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fWindowClass: { public: true, type: 'TEXT' },
     fPOSButtonGroupCode: { public: true, type: 'TEXT' },
     fPage: { public: true, type: 'INTEGER' },
     fComment: { public: true, type: 'TEXT' },
     POSButtonsVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fButtonType: { public: true, type: 'INTEGER' },
           fCode: { public: true, type: 'TEXT' },
           fLabel: { public: true, type: 'TEXT' },
           fColnr: { public: true, type: 'INTEGER' },
           fKeyCode: { public: true, type: 'INTEGER' },
           fModifiers: { public: true, type: 'INTEGER' },
           fPrintGroupCode: { public: true, type: 'TEXT' },
           fPOSButtonPictureCode: { public: true, type: 'TEXT' } } },
     fKeyCode: { public: true, type: 'INTEGER' },
     fModifiers: { public: true, type: 'INTEGER' } },
  indexes: 
   { WindowClassIndex681: 
      { fields: [ 'fWindowClass', 'fPOSButtonGroupCode', 'fPage' ],
        indicesType: 'UNIQUE' } } }