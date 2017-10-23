// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('../../../../core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class EmployeesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Employees',
            width    : 420,
            height   : 300
        });

        this.datadef = 'Employees';
        this.fields  = ['first_name', 'second_name', 'city', 'position'];
    }
};
