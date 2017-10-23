// @flow

const Register = require('erpjs/core/client/Register');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Input = require('erpjs/core/client/components/Input');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const Select = require('erpjs/core/client/components/Select');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const Button = require('erpjs/core/client/components/Button');
const Switch = require('erpjs/core/client/components/Switch');
const Tab = require('erpjs/core/client/components/Tab');
const Matrix = require('erpjs/core/client/components/Matrix');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

module.exports = class OrdersDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super(args);
        this.width   = 780;
        this.height  = 630;
        this.title   = 'Orders';
        this.datadef = 'Orders';
    }

    async render() {
        const nameInput = new Input({
            text:      'Name',
            field:      'order_name'
        });

        const commentInput = new Input({
            text:      'Comment',
            field:      'comment',
            width: 200
        });

        const customerInput = new Input({
            text:      'Customer',
            field:      'customer'
        });

        const dateInput = new Input({
            text:      'Register Date',
            field:      'register_date'
        });


        const urgentInput = new Checkbox({
            text:      'Urgent',
            field:      'urgent'
        });


        const supplierLabel = new BlockLabel({
            text: 'Supplier'
        });

        const supplierInput = new Select({
            options: [
                'Walmart',
                'State Grid',
                'Sinopec Group',
                'China National Petroleum',
                'Toyota',
                'Volkswagen Group',
                'Royal Dutch Shell',
                'Berkshire Hathaway',
                'Apple',
                'Exxon Mobil'
            ],
            field: 'supplier'
        });

        const addressInput = new Input({
            text:      'Address',
            field:      'address',
            width: 200
        });

        const paypalRadio = new RadioButton({
            text: 'Paypal'
        });


        const visaRadio = new RadioButton({
            text: 'Visa'
        });
        const cashRadio = new RadioButton({
            text: 'Cash'
        });
        const paymentLabel = new BlockLabel({
            text: 'Payment method'
        });
        const paymentInput = new RadioButtonsGroup({// eslint-disable-line
            buttons: [paypalRadio, visaRadio, cashRadio],
            field: 'payment_method'
        });
        const shipRadio = new RadioButton({
            text: 'Ship'
        });
        const planeRadio = new RadioButton({
            text: 'Plane'
        });
        const truckRadio = new RadioButton({
            text: 'Truck'
        });


        const shipmentLabel = new BlockLabel({
            text: 'Shipment'
        });
        const shipmentInput = new RadioButtonsGroup({ // eslint-disable-line
            buttons: [shipRadio, planeRadio, truckRadio],
            field: 'shipment_method'
        });

        const toDoor = new Button({
            text: 'door-to-door',
            width: 70
        });
        const toStorage = new Button({
            text: 'Storage',
            width: 70
        });
        const toPost = new Button({
            text: 'Post',
            width: 70
        });

        const deliverySwitch = new Switch({
            buttons:[toDoor, toStorage, toPost],
            field: 'delivery'
        });
        this.add(deliverySwitch);

        this.add(nameInput,  105, 10);
        this.add(customerInput,  105, 40);
        this.add(dateInput,  105, 70);
        this.add(supplierLabel,  50, 100);
        this.add(supplierInput,  105, 100);

        this.add(commentInput,  300, 10);
        this.add(addressInput,  300, 40);
        this.add(urgentInput,  300, 70);
        this.add(toDoor, 250, 100);
        this.add(toStorage, 325, 100);
        this.add(toPost, 400, 100);

        this.add(paymentLabel, 550, 10);
        this.add(paypalRadio,  610, 40);
        this.add(visaRadio,  610, 70);
        this.add(cashRadio,  610, 100);


        this.add(shipmentLabel,  700, 10);
        this.add(shipRadio,  730, 40);
        this.add(planeRadio,  730, 70);
        this.add(truckRadio,  730, 100);

        const goodsTab = new Tab({ name: 'GOODS' });
        const contactsTab   = new Tab({ name: 'CUSTOMER CONTACTS' });

        const goodsMatrix = new Matrix({
            field: 'goods_matrix',
            width:  400,
            height: 400
        });
        goodsTab.add(goodsMatrix, 50, 53);

        const contactsMatrix = new Matrix({
            field: 'contacts_matrix',
            width: 350,
            height: 400
        });
        contactsTab.add(contactsMatrix, 10, 13);

        this.add(goodsMatrix, 10, 150);
        this.add(contactsMatrix, 420, 150);
    }
};
