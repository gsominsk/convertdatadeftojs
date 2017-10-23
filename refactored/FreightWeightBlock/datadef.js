module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     FreightWeightBlockMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fTotWeight: { public: true, type: 'FLOAT' },
           fTotFreight: { public: true, type: 'FLOAT' },
           fTotFreightCost: { public: true, type: 'FLOAT' } } } } }