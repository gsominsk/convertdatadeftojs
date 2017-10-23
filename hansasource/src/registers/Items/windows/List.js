// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('../../../../core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ItemsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Items',
            width    : 420,
            height   : 300
        });

        this.datadef = 'Items';
        this.fields  = ['name', 'price'];
    }
};
