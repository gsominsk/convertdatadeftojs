module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fItemCode: { public: true, type: 'TEXT' },
     fDefMachine: { public: true, type: 'TEXT' },
     fStartDate: { public: true, type: 'DATE' },
     fEndDate: { public: true, type: 'DATE' },
     fRecipe: { public: true, type: 'TEXT' },
     fRouting: { public: true, type: 'TEXT' },
     ProdItemVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fMachine: { public: true, type: 'TEXT' },
           fDefRecipe: { public: true, type: 'TEXT' },
           fRecipes: { public: true, type: 'TEXT' },
           fRouting: { public: true, type: 'TEXT' } } } },
  indexes: { ItemCodeIndex68: { fields: [ 'fItemCode', 'fStartDate' ], indicesType: 'UNIQUE' } } }