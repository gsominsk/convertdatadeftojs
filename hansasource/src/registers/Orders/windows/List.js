// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('../../../../core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class OrdersListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Orders',
            width    : 420,
            height   : 300
        });

        this.datadef = 'Orders';
        this.fields  = [
            'order_name',
            'customer',
            'register_date',
            'supplier',
            'address',
            'payment_method',
            'shipment_method'
        ];
    }
};
