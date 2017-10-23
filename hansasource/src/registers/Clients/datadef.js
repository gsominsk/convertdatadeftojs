module.exports = {
    id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    first_name:  { public: true,  type: 'TEXT', primaryKey: true },
    second_name: { public: true,  type: 'TEXT' },
    birth_date:  { public: true,  type: 'TEXT' },
    city:        { public: true,  type: 'TEXT' }
};
