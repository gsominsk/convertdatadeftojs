module.exports = {
    id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    name:        { public: true,  type: 'TEXT' },
    description: { public: true,  type: 'TEXT' },
    price:       { public: true,  type: 'INTEGER' }
};
