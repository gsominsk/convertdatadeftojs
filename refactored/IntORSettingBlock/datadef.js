module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fOrdQuantToStockMov: { public: true, type: 'INTEGER' },
     fSentQuantToStockMov: { public: true, type: 'INTEGER' },
     fQuantToStockMov: { public: true, type: 'INTEGER' },
     fCostPriceToStockMov: { public: true, type: 'INTEGER' },
     fReqIntORClass: { public: true, type: 'INTEGER' },
     fAutoCloseIntOR: { public: true, type: 'INTEGER' } } }