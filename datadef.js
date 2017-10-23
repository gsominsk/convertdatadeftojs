module.exports = {
    fields: {
        id        :      { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
        order_name:      { public: true,  type: 'TEXT' },
        comment:         { public: true,  type: 'STRING' },
        customer:        { public: true,  type: 'TEXT' },
        register_date:   { public: true,  type: 'TEXT' },
        delivery:        { public: true,  type: 'STRING' },
        supplier:        { public: true,  type: 'TEXT' },
        address:         { public: true,  type: 'TEXT', unique: true },
        payment_method:  { public: true,  type: 'TEXT' },
        shipment_method: { public: true,  type: 'TEXT' },
        urgent:          { public: true,  type: 'INTEGER' }, // here defaultValue: 0
        goods_matrix :   {
            public: true,
            type: 'MATRIX',
            label: 'Goods',
            fields : {
                Name         : { public: true, type: 'STRING' },
                Description  : { public: true, type: 'TEXT', label:'About' },
                Price        : { public: true, type: 'REAL' },
                Expire       : { public: true, type: 'INTEGER', defaultValue: 3 },
                Warranty     : { public: true, type: 'INTEGER' }, // here defaultValue: 0
                NoExpire     : { public: true, type: 'INTEGER', defaultValue: null },
                id           : { type: 'INTEGER', autoIncrement: true,  primaryKey: true }
            },
            indexes: {
                unique_fields: { fields: ['Price', 'Warranty'], indicesType: 'UNIQUE' }
            }
        },
        contacts_matrix : {
            public: true,
            type: 'MATRIX',
            label: 'Customer Contacts',
            fields : {
                Name      : { public: true, type: 'STRING' },
                Email     : { public: true, type: 'STRING' },
                Skype     : { public: true, type: 'STRING' },
                Phone     : { public: true, type: 'STRING' },
                Position  : { public: true, type: 'STRING' },
                id        : { type: 'INTEGER', autoIncrement: true,  primaryKey: true }
            }
        }
    },
    indexes: {
        delivery_index: { fields: ['delivery', 'address'], indicesType: 'UNIQUE' }
    }
};
