// @flow

const Register = require('erpjs/core/client/Register');

const RegisterDetailWindow = require('erpjs/core/client/windows/SettingDetailWindow');
const oneColumnedLayout    = require('erpjs/core/client/layouts/oneColumnedLayout');

module.exports = class Settings extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            title    : 'CDW',
            width    : 420,
            height   : 155
        });

        this.datadef = 'test';
    }

    async render() {
        const view  = await this.getViewForModel();
        const items = view.getItemsList();

        oneColumnedLayout({
            window: this,
            items:  items
        });

        this.prepareHeader();
    }
};
