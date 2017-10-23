module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fEnableSimpleWeb: { public: true, type: 'INTEGER' },
     fForceLogin: { public: true, type: 'INTEGER' },
     fShowCalendarCustomer: { public: true, type: 'INTEGER' },
     fShowCalendarSupplier: { public: true, type: 'INTEGER' },
     fShowCalendarUser: { public: true, type: 'INTEGER' },
     fShowOrders: { public: true, type: 'INTEGER' },
     fShowInvoices: { public: true, type: 'INTEGER' },
     fShowShop: { public: true, type: 'INTEGER' },
     fShowMyAccount: { public: true, type: 'INTEGER' },
     fShowSale: { public: true, type: 'INTEGER' },
     fSaleItemClass: { public: true, type: 'TEXT' },
     fShowFavourites: { public: true, type: 'INTEGER' } } }