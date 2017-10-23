// @flow

const Register = require('erpjs/core/client/Register');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Input = require('erpjs/core/client/components/Input');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');
const Matrix = require('erpjs/core/client/components/Matrix');

module.exports = class EmployeesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super(args);

        this.width   = 780;
        this.height  = 630;
        this.title   = 'Employees';
        this.datadef = 'Employees';
    }

    async render() {
        const firstNameInput = new Input({
            text:      'First name',
            field:      'first_name'
        });


        const secondNameInput = new Input({
            text:      'Second name',
            field:      'second_name'
        });

        const birthDateInput = new Input({
            text:      'Birth date',
            field:      'birth_date'
        });

        const joinDateInput = new Input({
            text:      'Join date',
            field:      'join_date'
        });

        const cityInput = new Input({
            text:      'City',
            field:      'city'
        });

        const positionInput = new Input({
            text:      'Position',
            field:      'position'
        });

        this.add(firstNameInput,  105, 10);
        this.add(secondNameInput, 105, 50);
        this.add(birthDateInput,  335, 10);
        this.add(joinDateInput,   335, 50);

        this.add(cityInput,       565, 10);
        this.add(positionInput,   565, 50);

        const ordersTab = new Tab({ name: 'ORDERS' });
        const daysTab   = new Tab({ name: 'WORKING DAYS' });

        const stack = new Stack({
            width:  758,
            height: 400,
            tabs: [
                ordersTab,
                daysTab
            ]
        });

        const ordersMatrix = new Matrix({
            field: 'order_matrix',
            width: 756,
            height: 385
        });

        ordersTab.add(ordersMatrix, 0, 13);

        this.add(stack, 10, 110);
    }
};
