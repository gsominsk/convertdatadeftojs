// @flow

const Register = require('erpjs/core/client/Register');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Input = require('erpjs/core/client/components/Input');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');
const Matrix = require('erpjs/core/client/components/Matrix');
const GlobRegs = require('erpjs/core/client/api');
const modelsRegistry = require('erpjs/core/client/modelsRegistry');

module.exports = class MedicalCardsWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super(args);

        // console.log(this);
        // console.log(args);

        this.width   = 620;
        this.height  = 650;
        this.title   = 'Medical Cards';
        this.datadef = 'Med';

        console.log('[permission check] : ', GlobRegs.permissionsCheck('Clients', 'get'));
        // console.log('[list] : ', GlobRegs.list('Clients', {}));
        // console.log('[models registry] :');

        const a = modelsRegistry.find('Clients', {});
        const b = modelsRegistry.find('Employees', {});

        console.log(a, b);
    }

    async render() {
        const fullNameInput = new Input({
            text        : 'Full name',
            field       : 'fullName',
            label       : 'Entry',
            height      : 26,
            width       : 150,
            className   : 'customEntry',
            onChange    : () => {
                this.triggerInputValues('fullName', 'workerKey');
            }
        });

        const uniqueKeyInput = new Input({
            text    : 'User key',
            field   : 'workerKey',
            height  : 26,
            width   : 150,
            onChange: () => {
                this.triggerInputValues('workerKey', 'fullName');
            }
        });

        const startDateInput = new Input({
            text    : 'Start Period',
            field   : 'startPeriod',
            height  : 26,
            width   : 150,
            readonly: 'readonly',
            onChange: () => {
                return false;
            }
        });

        const endDateInput = new Input({
            text    : 'End Period',
            field   : 'endPeriod',
            height  : 26,
            width   : 150
        });

        const periodsMatrix = new Matrix({
            field: 'periodMatrix',
            width: 598,
            height: 470,
        });

        periodsMatrix.node.onkeyup = () => {
            console.log(event.target);
            // console.log(event.target.value);
        };

        console.log('[v5] : ', periodsMatrix);

        this.add(fullNameInput, 100, 10);
        this.add(uniqueKeyInput,100, 40);
        this.add(startDateInput,100, 70);
        this.add(endDateInput,  100, 100);

        const newPeriodsTab = new Tab({ name: 'PERIODS TAB' });

        newPeriodsTab.add(periodsMatrix, 0, 13);

        const stack = new Stack({
            width:  600,
            height: 480,
            tabs: [
                newPeriodsTab
            ]
        });

        this.add(stack, 10, 130);
    }

    triggerInputValues (inputTrigger, inputDest) {
        let objT;
        let objD;

        for (objT in this._inputsBinds)
            if (this._inputsBinds[`${objT}`].field == inputTrigger) break;

        for (objD in this._inputsBinds)
            if (this._inputsBinds[`${objD}`].field == inputDest) break;

        this._inputsBinds[`${objD}`].setValue(this._inputsBinds[`${objT}`].getValue());
    }
};
