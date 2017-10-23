module.exports = {
    id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    name:        { public: true,  type: 'TEXT'   },
    size:        { public: true,  type: 'INTEGER' },
    city:        { public: true,  type: 'TEXT'   },
    address:     { public: true,  type: 'TEXT'   }
};
