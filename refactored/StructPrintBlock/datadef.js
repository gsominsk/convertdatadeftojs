module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fShipmentPrint: { public: true, type: 'INTEGER' },
     fPickingPrint: { public: true, type: 'INTEGER' },
     fComponentsSum: { public: true, type: 'INTEGER' } } }