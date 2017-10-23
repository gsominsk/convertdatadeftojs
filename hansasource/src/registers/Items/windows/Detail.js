// @flow

const Register = require('erpjs/core/client/Register');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const oneColumnedLayout    = require('erpjs/core/client/layouts/oneColumnedLayout');

module.exports = class ItemsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super(args);

        this.width   = 460;
        this.height  = 230;
        this.title   = 'Items';
        this.datadef = 'Items';
    }

    async render() {
        const view  = await this.getViewForModel();
        const items = view.getItemsList();

        oneColumnedLayout({
            window: this,
            items:  items
        });
    }
};
