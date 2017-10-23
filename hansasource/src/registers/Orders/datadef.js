module.exports = {
    id        :      { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    order_name:      { public: true,  type: 'TEXT' },
    comment:         { public: true,  type: 'STRING' },
    customer:        { public: true,  type: 'TEXT' },
    register_date:   { public: true,  type: 'TEXT' },
    delivery:        { public: true,  type: 'STRING' },
    supplier:        { public: true,  type: 'TEXT' },
    address:         { public: true,  type: 'TEXT' },
    payment_method:  { public: true,  type: 'TEXT' },
    shipment_method: { public: true,  type: 'TEXT' },
    urgent:          { public: true,  type: 'BOOLEAN' },
    goods_matrix :   { public: true,
        type: 'MATRIX',
        label: 'Goods',
        fields : {
            Name         : { public: true, type: 'STRING' },
            Description  : { public: true, type: 'TEXT' },
            Price        : { public: true, type: 'REAL' },
            Expire       : { public: true, type: 'INTEGER' },
            Warranty     : { public: true, type: 'INTEGER' },
            id           : { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
        }
    },
    contacts_matrix : { public: true,
        type: 'MATRIX',
        label: 'Customer Contacts',
        fields : {
            Name      : { public: true, type: 'STRING' },
            Email     : { public: true, type: 'STRING' },
            Phone     : { public: true, type: 'STRING' },
            Position  : { public: true, type: 'STRING' },
            id        : { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
        }
    }
};
