module.exports = {
    id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    0:  { public: true,  type: 'TEXT', unique: 'name' },
    second_name: { public: true,  type: 'TEXT', unique: 'name' },
    birth_date:  { public: true,  type: 'TEXT' },
    city:        { public: true,  type: 'TEXT' },
    join_date:   { public: true,  type: 'TEXT' },
    position:    { public: true,  type: 'TEXT', unique: true },
    order_matrix : { public: true,
        type: 'MATRIX',
        label: 'Orders',
        fields : {
            id        :  { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
            Employer : { public: true, type: 'STRING'   },
            Shop     : { public: true, type: 'STRING'   },
            Item     : { public: true, type: 'STRING'   },
            Count    : { public: true, type: 'INTEGER'  },
            System   : { public: true, type: 'INTEGER'  }
        }
    }
};
