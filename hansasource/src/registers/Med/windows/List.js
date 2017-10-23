// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('../../../../core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class MedCardsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Medical Cards',
            width    : 520,
            height   : 300
        });

        this.datadef = 'Med';
        this.fields  = ['workerKey', 'fullName', 'sumDays', 'sumWorkDays'];
    }
};
