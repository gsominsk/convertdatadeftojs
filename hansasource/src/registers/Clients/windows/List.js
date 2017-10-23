// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('../../../../core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ClientsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Clients',
            width    : 420,
            height   : 300
        });

        this.datadef = 'Clients';
        this.fields  = ['first_name', 'second_name', 'city'];
    }
};
