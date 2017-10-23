// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('../../../../core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ShopsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Shops',
            width    : 420,
            height   : 300
        });

        this.datadef = 'Shops';
        this.fields  = ['city', 'name', 'size'];
    }
};
