// @flow

const ApplicationWindow = require('erpjs/core/client/components/ApplicationWindow');
const Button            = require('erpjs/core/client/components/Button');
const ModulesWindow     = require('erpjs/core/client/internals/ui/ModulesWindow.js');
const SettingsWindow    = require('erpjs/core/client/internals/ui/SettingsWindow.js');
const SystemWindow      = require('erpjs/core/client/internals/ui/SystemWindow.js');
const RegistersWindow   = require('erpjs/core/client/internals/ui/RegistersWindow.js');

const Label = require('erpjs/core/client/components/BlockLabel');

module.exports = class App extends ApplicationWindow {
    constructor(args) {
        super(args);
    }

    render() {
        const moduleTitle = new Label({
            text : 'Module: ' + this.getActiveModule().name,
            color: '#0E53B3',
            size : 14,
            bold : true
        });

        let registersWindow       = RegistersWindow(this);
        let modulesWindow         = ModulesWindow(this);
        let settingsWindow        = SettingsWindow(this);
        let systemRegistersWindow = SystemWindow(this);

        const registersButton = new Button({
            width   : 60,
            height  : 60,
            title   : 'Registers',
            icon    : 'fa-list-alt',
            onClick : () => {
                if (registersWindow.isRemoved) {
                    registersWindow = RegistersWindow(this);
                }

                registersWindow.open();
            }
        });

        const systemRegisters = new Button({
            width   : 60,
            height  : 60,
            title   : 'System',
            icon    : 'fa-cogs',
            onClick : () => {
                if (systemRegistersWindow.isRemoved) {
                    systemRegistersWindow = SystemWindow(this);
                }

                systemRegistersWindow.open();
            }
        });

        const settingsButton = new Button({
            width   : 60,
            height  : 60,
            title   : 'Settings',
            icon    : 'fa-wrench',
            onClick : () => {
                if (settingsWindow.isRemoved) {
                    settingsWindow = SettingsWindow(this);
                }

                settingsWindow.open();
            }
        });

        const modulesButton = new Button({
            width   : 60,
            height  : 60,
            title   : 'Modules',
            icon    : 'fa-folder-open',
            onClick : () => {
                if (modulesWindow.isRemoved) {
                    modulesWindow = ModulesWindow(this);
                }

                modulesWindow.open();
            }
        });


        const regitestersLabel = new Label({
            text: 'REGISTERS',
            size: 10
        });

        const modulesLabel = new Label({
            text: 'MODULES',
            size: 10
        });

        const settingsLabel = new Label({
            text: 'SETTINGS',
            size: 10
        });

        const systemLabel = new Label({
            text: 'SYSTEM',
            size: 10
        });

        this.add(registersButton,  20,  45);
        this.add(regitestersLabel, 21, 30);

        this.add(modulesButton, 95, 45);
        this.add(modulesLabel,  99, 30);

        this.add(settingsButton, 170, 45);
        this.add(settingsLabel,  174, 30);

        this.add(systemRegisters, 245, 45);
        this.add(systemLabel, 253, 30);

        this.add(moduleTitle, 10, 150);

        this.eventEmitter.addListener('set_module', () => {
            moduleTitle.setText('Module: ' + this.getActiveModule().name);
        });
    }
};
